import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Student from "./models/student.js";
import studentRouter from "./Routers/studentRouter.js";
import userRouter from "./Routers/userRouter.js";
import { loginUser } from "./Routers/controllers/userController.js";
import jwt from "jsonwebtoken";

const app=express();

app.use(bodyParser.json()); // a type of middleware - bodyparser



app.use( // read all requests and do the functions *****

    (req,res,next)=>{

       // console.log("Request received")
        const value =req.header("Authorization")
      // console.log(value);

        if (value != null){
        const token =value.replace("Bearer ","")
      //  console.log(token)

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

app.use("/students", studentRouter) ;
app.use("/users",userRouter);


/*function started(){
    console.log("Server started")
}
app.listen(5000,started);*/


//Day 04-- this code should not write in this place -- this is wrong




// db eke save krnda puluwan child kenek sadiima

app.post("/",(req,res)=>{
    
   console.log(req.body)

   const student= new Student(
        {
           name:req.body.name,
           age:req.body.age,
           email:req.body.email
        }
    )
    student.save().then(()=>{
        res.json({
            message:"student saved successfully"
        }
    )
    }).catch(
        ()=>{
            console.log("Failed to save student")
        }
    )
})



app.get("/", (req,res)=>{
    console.log(req)
    res.json({
        message:"This is a get request"
    })
    console.log("This is a GET request.")
})

app.get("/", (req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }
).catch(
    ()=>{
        res.json({
            message:"Failed to fetch students"
        })
    }
)
}) 







app.delete("/",()=>{
    console.log("This is a DELETE request.")
})
app.put("/",()=>{
    console.log("This is a put  request")
})
app.listen(5000,()=>{
    console.log("Server started")
})


app.listen(5000,()=>{
console.log("server started on port 5000");
})