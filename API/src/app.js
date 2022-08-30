'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const app = express();


// Inicializar Middlewares Generales

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200 
}));


// import routes

const users = require('./routes/users');
const computers = require('./routes/computers');
const students = require('./routes/student');
const ingress = require('./routes/ingress');
const carnet = require('./routes/carnet');


// Inicializar Rutas
app.use('/api/users', users);
app.use('/api/computers', computers);
app.use('/api/students', students);
app.use('/api/ingress', ingress);
app.use('/api/carnet', carnet);


// Iniciar Server

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})