
'use strict';


const router = require('express').Router();
const computerController = require('../controllers/computers/ComputerController');
const validateData = require('../controllers/validateData');
const studentController = require('../controllers/student/studentController');
const personController = require('../controllers/person/personController');
const ingress = require('../controllers/ingress/ingressController');



// import middleware

const validateToken = require('../controllers/validateTokenController').validateToken;

// Esta ruta es para registrar el computador de un invitado
// primero valida los datos enviados por post, luego el token, luego hace las insersiones en la db( Tablas: computer, guest, ingress)
router.post('/registerComputerGuest', validateData.registerComputerGuest , validateToken, computerController.create, personController.create, ingress.createAccessGuest );




// Esta ruta es para registrar el computador de un estudiante
// primero valida los datos enviados por post, luego el token, valida si existe el estudainte y  luego hace las insersiones en la db( Tablas: computer, ingress)
router.post('/registerComputerStudent', validateData.registerComputerStundent , validateToken, studentController.validateStudent, computerController.create, ingress.createAccessGuest );



module.exports = router;