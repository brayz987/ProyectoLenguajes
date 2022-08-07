'use strict';

const express = require('express');
const bodyparser = require('body-parser');


const app = express();


// Capturar Body

app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());


// import routes

const users = require('./routes/users');

// router middlewares
app.use('/api/users', users);


// Iniciar Server

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})