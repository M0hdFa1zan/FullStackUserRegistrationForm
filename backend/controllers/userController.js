const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

exports.createUser = async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
};

exports.updateUser = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
};

exports.deleteUser = async (req, res) => {
    console.log("Delete works!", req.params.id);
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
};
