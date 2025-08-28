import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import userRouter from "./Routers/userRouter.js";

import jwt from "jsonwebtoken";
import productRouter from "./Routers/productRouter.js";

const app=express();

app.use(bodyParser.json()); // a type of middleware - bodyparser



app.use( 

    (req,res,next)=>{

       
        const value =req.header("Authorization")
      

        if (value != null){
        const token =value.replace("Bearer ","")
     

        jwt.verify(token,

            "cbc-6503",

        (err,decoded)=>{

         console.log(decoded);

if (decoded == null){
    res.status(403).json({
        message :"Unauthorized" 
    })

}else{
    req.user = decoded  // read the user related to the request,instead this user variable we can put any name. 
    next();
}
        }
    )
        }else{
next()
        }

        
    }
)

const connectionString="mongodb+srv://admin:78910@cluster0.kbopooi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectionString).then(
    ()=> {
    console.log("Database connected")
}).catch(()=>{
    console.log("Failed to connect to the database")
}

)


app.use("/api/users", userRouter)
app.use("/api/products",productRouter)

















app.listen(5000,()=>{
    console.log("Server started")
})


