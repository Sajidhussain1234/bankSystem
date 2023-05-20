const express = require('express');
const router = express.Router();
const controller = require('./auth.controller');
const fetchuser = require("./auth.middleware");


// Signup: Create a new account
router.post('/signup', controller.signup);

// Login: 
router.post('/login', controller.login);

// Get User: 
router.get('/getuser', fetchuser, controller.getUser);


module.exports = router;
