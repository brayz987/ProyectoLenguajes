
'use strict';


const router = require('express').Router();
const studentController = require('../controllers/student/studentController');
const personController = require('../controllers/person/personController');
const validateData = require('../controllers/validateData');




// import middleware

const validateToken = require('../controllers/validateTokenController').validateToken;

// Esta ruta es para registrar un estudiante al sistema
router.post('/register', validateData.registerStudent , validateToken, personController.create , studentController.create );


// Esta ruta es para obtener la info basica de un estudiante
router.post('/getStudent', validateData.getStudent , validateToken, studentController.getStudent );


module.exports = router;