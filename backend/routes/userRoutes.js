const express = require('express');
const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
