const passport = require('passport');
let isauthenticated=(req,res,next)=>{
    console.log(req.path)
    req.session.path=req.path;
    if(!req.isAuthenticated()){
   req.flash("val","user must be logged in !")

        res.redirect("/login")
    }else{
        return next();
    }
        
    
       

    
}

let resavepath=(req,res,next)=>{
    res.locals.value=req.session.path;
     return next()
}

module.exports={isauthenticated,resavepath}