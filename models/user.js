import mongoose from 'mongoose';

const userSchema =new mongoose.Schema({
    firstName : {
type : String,
required : true
    },
    lastName : {
type : String,
required : true
    },
    email :{
type : String,
required : true,
unique : true,
    } ,
    password :{
type: String,
required : true,
    } ,
    isBlocked : {
        type : Boolean,
        default : false,
    },
    role : {
        type: String,
        default : "user",
    },
    isemailVerified : {
        type: Boolean,
        default: false,
    },
    image : {
        type: String,
        default : "https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg"
    },
})

// create the model
const User =mongoose.model("users", userSchema)

//export

export default User;
