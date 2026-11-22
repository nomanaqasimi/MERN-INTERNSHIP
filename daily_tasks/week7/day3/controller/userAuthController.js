const users = require("../model/useAuthmodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.registerUser=async(req,res,next)=>{
    try{
        const {name ,email,role,password} = req.body
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
                role,
                password : hashedPassword,
                

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
exports.getAllUsers =async (req,res,next)=>
     {
        try{
             const allUsers = await users.find();
            res.status(200).json(allUsers);
    }catch(err){
        next(err);
    }
}
    exports.loginUser=async (req,res,next) =>{
    try{
        const {email,password}=req.body;

        
        const user = await users.findOne({email});
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(401).json({message:"invalid password"})
        }
        const token = jwt.sign(
           { id: user._id, role: user.role },
            process.env.JWT_SECRET,{expiresIn:"1h"}
        );
        res.status(200).json({message:"user logged in successfully",token,user:{name: user.name ,
            role:user.role
        }})
    }catch(err){
        next(err);
    }
}
     
