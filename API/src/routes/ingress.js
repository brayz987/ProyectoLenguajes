
'use strict';


const router = require('express').Router();
const validateData = require('../controllers/validateData');
const ingressController = require('../controllers/ingress/ingressController');
const studentController = require('../controllers/student/studentController');



// import middleware

const validateToken = require('../controllers/validateTokenController').validateToken;

// Esta ruta es para traer los datos de un ingreso de computador
router.post('/getComputerRegister', validateData.getIngressComputer , validateToken, ingressController.getIngressComputer, studentController.getCodeStudent );
router.post('/registerExit', validateData.registerExit , validateToken, ingressController.registerExit);





module.exports = router;