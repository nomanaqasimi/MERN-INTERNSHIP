let users=[
    {id: 1,
        name:"roy",
        age:23
    },
    {
        id:2,
        name:"aarav",
        age:25
    },
    {
        id:3,
        name:"shanaya",
        age:21
    },
    {
        id :4,
        name:"shivangi",
        age:24
    }
]

exports.getAll=(req,res)=>{
    res.status(200).json(users);
}
exports.getUserById=(req,res)=>{
   const user =users.find((u)=>u.id=== parseInt(req.params.id));
   if(!user){
    return res.status(401).json("user not found");
   }
    res.status(200).json(user)
}