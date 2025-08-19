import Student from "../../models/student.js";

 

//If there is a get request
//export default function getStudents (req,res){  export default denne ekak witharak export karanawanam witharayi

export  function getStudents (req,res){ 
    Student.find().then(
        (students)=>{
        res.json(students);
    }
).catch(
    ()=>{
        res.json({
            message:"Failed to fetch students"
        })
    }
)
}

//if there is a post request
export  function createStudent(req,res){

// console.log(req.user)
    
  // console.log(req.body)
  if(req.user == null){
    res.status(403).json({
        message :"Please login to create a student"
    })
    return;

  }
  if(req.user.role != "admin"){
    res.status(403).json({
        message:"Please login as an Admin to create student"
    })
    return;
  }

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
}
