const users = require("../models/userModel");

exports.ParentRoute = (req, res) => {
  res.status(200).json({ message: "Welcome to the User API" });
}

exports.getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await users.find();
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
  }
  exports.createUser = async (req, res, next) => {
    try {
      const newUser = new users(req.body);
      if (!newUser.name || !newUser.password) {
        return res.status(400).json({ error: "Name and password are required" });
      }
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        next(error);
    }
  }
  exports.addMultipleUsers = async (req, res, next) => {
  try{  const newUsersArray = req.body;

    if (!Array.isArray(newUsersArray) || newUsersArray.length === 0) {
      return res.status(400).json({ error: "Please provide an array of users" });
    }
    const savedUsers = await users.insertMany(newUsersArray);
    res.status(201).json(savedUsers);

  }catch (error) {
    next(error);
  }

    }