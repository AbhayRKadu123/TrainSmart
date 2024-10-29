const mongoose = require('mongoose');
const passport_local_mongoose=require("passport-local-mongoose");
require('dotenv').config();
const { required } = require('joi');
let Schema=mongoose.Schema;
// Connect to the database
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

main().catch(err => console.log(err));
const user=mongoose.Schema({
    email:{
        type:String,
        required:true
    }
})

user.plugin(passport_local_mongoose)

let User=new mongoose.model('User',user)

module.exports=User;