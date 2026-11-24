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
exports.updateUserByAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;

    const updatedUser = await users
      .findByIdAndUpdate(
        id,
        { name, email, role },
       { returnDocument: "after", runValidators: true })
      .select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully by admin",
      updatedBy: req.user.name,
      user: updatedUser,
    });
  } catch (err) {
    next(err);
  }
};
exports.getAllUsersByAdmin = async (req, res, next) => {
  try {
    const allUsers = await users.find().select("-password");

    res.status(200).json({
      message: "All users fetched successfully",
      admin: req.user.name,
      totalUsers: allUsers.length,
      users: allUsers,
    });
  } catch (err) {
    next(err);
  }
};

exports.getProfile = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "User profile fetched successfully",
      user: req.user,
    });
  } catch (err) {
    next(err);
  }
};