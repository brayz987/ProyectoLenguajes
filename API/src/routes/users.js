
'use strict';


const router = require('express').Router();
const userConstroller = require('../controllers/users/user');
const loginController = require('../controllers/users/login');

// import middleware

const validateToken = require('../controllers/validateToken').validateToken;


router.post('/register', validateToken, userConstroller.create );
router.get('/list', validateToken, userConstroller.list );


// Login sin proteccion el cual generar el token

router.post('/login', loginController.loginUser );

module.exports = router;