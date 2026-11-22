const users = require("../model/useAuthmodel");
const bcrypt = require("bcryptjs");
exports.registerUser=async(req,res,next)=>{
    try{
        const {name ,email,password} = req.body
        if(!name||!email||!password){
         return res.status(400).json("all fields are required");
        }
        const existUser =await users.findOne({email});
        if(existUser){
               return  res.status(400).json("the email already exists");
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await users.create(
            {
                name,
                email,
                password : hashedPassword
            }
        );
       
      res.status(201).json({messgae :"user created successdUslerfuly",
        newUser
      }); 
    }catch(err){
        next(err);
    }
}
exports.getUser=async (req,res,next) =>
    {
        try{    
        const email = req.params.email;
        const user = await users.findOne({email});
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
    
}