import mongoose from "mongoose"

// create schema
const studentSchema= new mongoose.Schema({
    name:String,
    age:Number,
    email:String
})

// create the model
const Student=mongoose.model("students",studentSchema)// now we can add read delete data from student db

//go out-- file eken studentwa export karaganna
export default Student; 
