const { text } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const user=require("./user");
const { ref } = require('joi');


async function main() {
  await mongoose.connect(process.env.mongourl);
}
main().catch(err => console.log(err));
const Sets=mongoose.Schema({
    sets:{
        reps:[Number],
        weight:[Number]
    }
})
const Schemas=mongoose.Schema({
    muscle:{
        type:String,
        required:true
    },
    exercise:{
        type:String,
        required:true
    },
    sets:{
        reps:[Number],
        weight:[Number]
    }
})
const exercise_session=mongoose.Schema({Exercises:[Schemas],
    workoutNotes:{
        type:String,
      
        default:"Sometimes you dont realize your own strength until you come face to face with your greatest weakness."
    },
   
    date: { 
        type: String, 
        default:new Date()
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user
    },
  
   

})
const ExerciseDb = new mongoose.Schema({
    exercise_name: String,
    targeted_muscle:String,
    equipment:String,
    instructions:Array,
    sets:Number,
    reps:String,
    image_url:String
  
  
  });
  
  const Exercises = mongoose.model('Exercises',ExerciseDb);
const sessions =mongoose.model("Schema",exercise_session);

module.exports = {sessions,Exercises}