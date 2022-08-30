
'use strict';


const router = require('express').Router();
const validateData = require('../controllers/validateData');
const studentController = require('../controllers/student/studentController');
const carnetController = require('../controllers/carnet/carnetController');

// import middleware

const validateToken = require('../controllers/validateTokenController').validateToken;


router.post('/register', validateData.registerCarnet, validateToken, studentController.validateStudent, carnetController.register);

router.get('/:id', validateToken,  carnetController.get );

module.exports = router;