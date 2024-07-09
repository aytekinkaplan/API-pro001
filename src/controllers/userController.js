const User = require("../models/userModel");
const users = []; // Basit bir kullanıcı listesi (örnek veri)

exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = new User(users.length + 1, name, email);
  users.push(newUser);
  res.status(201).json(newUser);
};
