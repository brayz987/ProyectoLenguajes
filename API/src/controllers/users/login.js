const Sequelize = require('sequelize');
const user = require('../../models').user;
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    async loginUser(req , res){

        // Validacion de datos
        const shemaLogin = Joi.object({
            email: Joi.string().min(5).max(255).required().email(),
            password: Joi.string().min(8).max(1024).required()
        })

        const {error} = shemaLogin.validate(req.body);
        if(error) return await res.status(400).json(error.details[0].message);
        
        // Se valida si el correo si exite

        const userData = await user.findOne({where: { email: req.body.email}});
        
        if (userData === null) return await res.status(400).json({message: 'Usuario no encontrado'});


        // Se valida el password

        const validPassword =  await bcrypt.compare(req.body.password, userData.password);
        if (!validPassword) return await res.status(400).json({message: "Contraseña mal"});


        // Se crea token

        const token = jwt.sign({
            name: userData.name,
            id: userData.id
        }, process.env.SECRET_TOKEN ,{ expiresIn: "365d" });

        return await res.header('auth-token', token).json({
            message: 'todo nice',
            token: token
    })

    },
}