
'use strict';


const router = require('express').Router();
const userConstroller = require('../controllers/users/userController');
const loginController = require('../controllers/users/loginController');

// import middleware

const validateToken = require('../controllers/validateTokenController').validateToken;


router.post('/register', validateToken, userConstroller.create );
router.get('/list', validateToken, userConstroller.list );


// Login sin proteccion el cual generar el token

router.post('/login', loginController.loginUser );

module.exports = router;