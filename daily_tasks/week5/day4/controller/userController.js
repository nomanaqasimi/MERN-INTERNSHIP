let users=[
    {
        id : 1,
        name:"john"
    },
    {
        id:2,
        name:"sara"
    }
]
//getall

exports.getUsers=(req,res)=>{
  res.status(200).json(users);
}
//getbyID

exports.getUserById=(req,res)=>{
    const user=users.find(u=>u.id==req.params.id)
    if(user){
        res.status(200).json(user)
    }else{
        res.status(404).json({message:"user not found"})
    }
}
//creating a new user
exports.createUser=(req,res)=>{
    const user=req.body;
    users.push(user);
    res.status(201).json(user);
}
//delete a user
exports.deleteUser = (req, res) => {
    
    const user = users.find(u => u.id == req.params.id);
    
    if (user) {
        users = users.filter(u => u.id != req.params.id);
       
        res.status(200).json({ deletedUser: user, message: "user deleted" });
    } else {
        res.status(404).json({ message: "user not found" });
    }
}
//updating a user

exports.updateUser = (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) {
     return res.status(404).json({ message: "user not found" });
    }
    user.name=req.body.name || user.name
    res.status(200).json(user)
}