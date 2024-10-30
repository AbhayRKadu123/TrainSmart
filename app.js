const express = require('express');
const app = express();
const ejsmate = require('ejs-mate')
const path = require('path');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const ExpressError = require("./Error")
const {sessions,Exercises} = require('./schemas/workoutdata');
// const { date } = require('joi');
const flash = require('connect-flash');
let {isauthenticated,resavepath}=require('./MiddleWare')
let User = require("./schemas/user")
var methodOverride = require('method-override')
const { url } = require('inspector');
// const { exercises } = require('./Data/data');
let Joi=require('joi')
require('dotenv').config();
let {schema}=require("./SchemaValidation")
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.engine('ejs', ejsmate);
app.use(methodOverride('_method'))
app.set('view-engine', 'ejs')
const store = MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    crypto: {
      secret: process.env.secret
    },
    touchAfter:24*3600
  })
  store.on('err',()=>{
    console.log('err')
  })
app.use(session({
    store:store,
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3 * 24 * 60 * 60 * 1000, // Session will last for 10 seconds
        httpOnly: true
    }
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); // Use the correct strategy
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(flash())
app.use(express.json());

app.use((req,res,next)=>{
    res.locals.currentuser=req.user;
    return next()
})
app.use((req,res,next)=>{
    res.locals.success=req.flash('val')
    res.locals.error=req.flash('errval')
    next()
})
app.listen(8080, (req, res) => {
    console.log("app is listening on port 8080")
})
function WrapAsync(fn) {
    return (req, res, next) => {
        fn(req, res, next).catch((err) => {
            let { status = 500, message = "something went wrong" } = err;

            return next(new ExpressError(status, message))
        })
    }

}

app.get("/register", (req, res, next) => {
    res.render('pages/register.ejs')
})
app.post("/register", WrapAsync(async (req, res) => {
    let { email, username, password } = req.body;
    let newUser = new User({ email: email, username: username });

    
    let registeredUser = await User.register(newUser, password);

    req.login(registeredUser,(err)=>{
        if(err){
            res.send('something went wrong')
        } 

        console.log(registeredUser)
   req.flash("val","user registered successfully !")

        res.redirect('/')
    
    })
    
   

}))
app.get("/login", (req, res) => {
    res.render('pages/login.ejs');
});

app.post('/login',resavepath, passport.authenticate("local", { failureRedirect: "/login" }), WrapAsync(async(req, res) => {
   
   let url=res.locals.value||'/';
   console.log('login'+res.locals.value)
   req.flash("val","user logged in successfully !")
    res.redirect(url)
}))
app.get("/logout",(req,res)=>{
    req.logout((err)=>{
        if(err){
            res.send('something went wrong')
        }
   
        req.flash("val","user logged out successfully !")

res.redirect('/login')
    })
})
// process.env
app.get("/", WrapAsync(async (req, res) => {
    let quote = await fetch(process.env.quoteurl);
    quote = await quote.json();
    console.log(quote[0])
    res.render("pages/home.ejs", { quote})
}))
app.get("/getexercises",isauthenticated,WrapAsync(async(req,res)=>{
    console.log(req.query)
    const exercises = Object.values(req.query);
  console.log(exercises); 
let data;
   if(exercises.length!=0){
     data = await Exercises.find({
        exercise_name: { $in: exercises }
      });
   }else{
     data = await Exercises.find({
       
      });
   }
   
      
    res.render("pages/workoutlibrary.ejs",{data})
}))
app.get("/exercisedata",isauthenticated, WrapAsync(async (req, res) => {
    res.render("pages/addworkout.ejs")
}))
app.post("/exercisedata",isauthenticated, WrapAsync(async (req, res, next) => {
let id=req.user._id;
// console.log('id'+id)
// console.log('datarecieved=====================')
// console.log('datarecieved='+req.body.Exercises)


// console.log('datarecieved=====================')

let {error,value}=schema.validate(req.body.Exercises)
if(error){
    throw new ExpressError(400,error.message)
}
req.body.owner=id;
    const Sessions = new sessions(req.body);
    let D=await Sessions.save()
   req.flash("val","New Session Created !")

    res.redirect("/allsession")
}))
app.get("/allsession",isauthenticated, WrapAsync(async (req, res) => {
    console.log('id'+req.user._id)
  

const data = await sessions.find({owner:req.user._id})
console.log(data)
res.render("pages/allsessions.ejs", { data })

}))
app.get("/pushpullleg",isauthenticated,WrapAsync(async(req,res)=>{
res.render("pages/pushpullleg.ejs")
}))
app.get("/SingleMuscle",isauthenticated,WrapAsync(async(req,res)=>{
    res.render("pages/SingleMuscle.ejs")
    }))
    app.get("/upperlower",isauthenticated,WrapAsync(async(req,res)=>{
        res.render("pages/upperlower.ejs")
        }))
app.get("/viewsession/:id",isauthenticated, WrapAsync(async (req, res, next) => {
const { id } = req.params;
let data = await sessions.findById(id);
        console.log(data)
res.locals.view_id = id;
// console.log(data.Exercises[0].sets)
        // console.log(data.Exercises[0].sets)
     res.render("pages/viewsession.ejs", { data })
    // res.send(data)


}))
app.get("/editexercise/:id1/:id2",isauthenticated,WrapAsync(async (req, res) => {
    console.log(req.params)
    const { id1, id2 } = req.params;
    res.locals.id1 = id1;
    res.locals.id2 = id2;
    const val = await sessions.find({ _id: id2 }, { Exercises: { $elemMatch: { _id: id1 } } })

    let data = val[0].Exercises[0];
    res.render("pages/EditExercise.ejs",{data})
}))
app.patch("/editexercise/:id1/:id2",isauthenticated,WrapAsync(async (req, res) => {
    console.log(req.body)
    console.log('res.locals.id1')
    let { id1, id2 } = req.params;
    id2 = id2.trim();
    id1 = id1.trim();

    console.log(id1)
    console.log(id2)
    const updatedSession = await sessions.updateOne({ _id: id2, "Exercises._id": id1 }
        , { $set: { "Exercises.$.muscle": req.body.Muscle, "Exercises.$.exercise": req.body.exercise, "Exercises.$.sets.reps": req.body.reps, "Exercises.$.sets.weight": req.body.weight } });
    console.log('updatedSession')
    // console.log($)
    // console.log(updatedSession[0].Exercises[0].muscle)
    // updatedSession[0].Exercises[0].muscle='shoulder'
   req.flash("val","Exercise Updated !")

    res.redirect(`/viewsession/${id2}`)
}))
app.delete('/delete-session/:id',isauthenticated, WrapAsync(async (req, res) => {
    const itemId = req.params.id;
    // Logic to delete the item from the database
    // Example: Item.deleteOne({ _id: itemId })
    const val = await sessions.findByIdAndDelete(itemId)
    console.log(itemId)
   req.flash("val","Session deleted successfully !")

    res.redirect('/allsession');  // Redirect after delete
}))
app.delete('/delete-exercise/:id/:vid',isauthenticated, WrapAsync(async (req, res) => {
    const itemId = req.params.id;
    const viewId = req.params.vid;

    let exercises = await sessions.findById(viewId);
    console.log(exercises.Exercises.length)
    console.log(itemId)
    console.log(viewId)

    if (exercises.Exercises.length > 1) {
         await sessions.updateOne(
            { _id: viewId },
            { $pull: { Exercises: { _id: itemId } } },
        )
        req.flash("val","Exercise deleted successfully !")

        res.redirect(`/viewsession/${viewId}`);
    }else{
    //     req.flash("error","Session can't be empty !")
    
    req.flash("errval","Session can't be empty !")

    res.redirect(`/viewsession/${viewId}`);
    
    // res.send(viewId)

    }
   
    // res.send('exercise deleted') 
}))
app.get("/searchbydate",isauthenticated,WrapAsync( async (req, res) => {
    let date = new Date(req.query.date);
    date = req.query.date;
    const data = await sessions.find({ date: date,owner:req.user });
console.log(req.query.date)
console.log(data)

    res.render("pages/allsessions.ejs", { data })
}))
app.use((req, res, next) => {
    return new ExpressError(401, "page not found")
})
app.use((err, req, res, next) => {
   req.flash("errval",err.message)

    res.redirect('/')
    // res.send(err)
})

