const Sequelize = require('sequelize');
const user = require('../../models').user;
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {

    async create(req, res) {

        // Validacion de datos
        const shemaCreate = Joi.object({
            name: Joi.string().min(5).max(255).required(),
            email: Joi.string().min(5).max(255).required().email(),
            password: Joi.string().min(8).max(1024).required()
        })
        
        const {error} = shemaCreate.validate(req.body);
        if(error) return await res.status(400).json(error.details[0].message);

        // Se valida si el correo ya exite

        const validEmailDb = await user.findOne({where: { email: req.body.email}});
        
        if (validEmailDb !== null) return await res.status(400).json({message: 'El email ya existe'});


        // Se realiza encripcion de la contraseña

        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);

        return await user
            .create ({
                name: req.body.name,
                email: req.body.email,
                password: password
            })
            .then ( user => res.json(user) )
            .catch ( error => res.status(400).json(error))
    },


    async list(_, res) {
        return await  user.findAll ({})
            .then(user => res.json(user))
            .catch ( error => res.status(400).json(error))
    },

    async find (req, res) {
        return await user.findAll({
            where: {
                email: req.body.email,
            }
            .then(user => res.json(user))
            .catch ( error => res.status(400).json(error))
        })
    }
}