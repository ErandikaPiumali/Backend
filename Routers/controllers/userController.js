import User from "../../models/user.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function createUser(req,res){


const passwordHash = bcrypt.hashSync(req.body.password,10) // 1. generate hash

//2. user data object
    const userData = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : passwordHash,
        
    };
    //3. create a new user object
    const user = new User(userData);

     //const user = new User(req.body)
//4. save
    user.save().then (
        ()=>{
            res.json({
                message:"User created successfully"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message: "Failed to create user"
            })
        }
    )
}

export function loginUser(req,res){

   // console.log(req.user)
    const email =req.body.email;
    const password = req.body.password;

    User.findOne(
        { email: email }
    )

    .then(
        (user) => {
      //  console.log( "User sent to client:",user); // VS Code console
      if (user==null) {
       // res.json({
       res.status(404).json({
            message:"User not found"
        })
        return;

      }else{
        const isPasswordCorrect = bcrypt.compareSync(password,user.password);
      /*  if(isPasswordCorrect){
            res.json({
                message:"Login successful"
            })*/

                if (isPasswordCorrect){
                    const token=jwt.sign({
                        email:user .email,
                        firstName :user.firstName,
                        lastName :user.lastName,
                        role :user.role,
                        isBlocked :user.isBlocked,
                        isemailVerified :user. isemailVerified,
                        image:user.image
                    }, "cbc-6503"
                )
                res.json({
                    token:token,
                    message:"Login successful"
                })
                }

        else{
res.status(403).json({
    message:"Incorrect Password"
})
        }
      }
         
                       
    });

}