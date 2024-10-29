const { array } = require('joi');
const mongoose = require('mongoose');
const data =require('./data')
main().catch(err => console.log(err));
require('dotenv').config();
async function main() {
  await mongoose.connect('mongodb+srv://Akshay:SHnj%40575575@cluster0.jfw4u.mongodb.net/TrainSmart?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

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

async function AddData() {
let res=await Exercises.insertMany(
    data.exercises)
    console.log(res)
}
AddData()