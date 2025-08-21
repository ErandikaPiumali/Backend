import mongoose from "mongoose";

//create schema
const productSchema = new mongoose.Schema({
    productId : {
        type : String,
        required : true,
        unique : true,

    },
    name : {
        type : String,
        required : true,
    },
    altNames : {
        type: [String],
        default : []
    },
    labelledPrice : {
        type : Number,
        required : true,
    },
    price : {
type : Number,
required : true,
    },
    images : {
        type : [String], default : ["/default.product.jpg"]
    },
    description : {
        type : String,
        required : true,
    },
    stock : {
        type : Number,
        required : true,
        default : 0,
    },
    isAvailable :{
        type : Boolean,
        default : true,
    },
    category :{
        type: String,
        required : true,
        default :"cosmetics"
    }
})

// create the model
const Product =mongoose.model("products",productSchema);


//export

export default Product;
