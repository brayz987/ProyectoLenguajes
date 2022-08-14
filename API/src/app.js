'use strict';

const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');


const app = express();


// Capturar Body

app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());
app.use(cors({
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200 
}));


// import routes

const users = require('./routes/users');
const computers = require('./routes/computers');
const students = require('./routes/student');

// router middlewares
app.use('/api/users', users);
app.use('/api/computers', computers);
app.use('/api/students', students);


// Iniciar Server

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})