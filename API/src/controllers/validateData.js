const Joi = require('@hapi/joi');


module.exports = {

    async registerComputerGuest(req, res, next) {

        // Validacion de datos
        const shemaCreate = Joi.object({
            brand: Joi.string().min(3).max(255).required(),
            model: Joi.string().min(3).max(255).required(),
            serial: Joi.string().min(3).max(255).required(),
            name: Joi.string().min(3).max(255).required(),
            lastName: Joi.string().min(3).max(255).required(),
            identification: Joi.number().required(),
            idTypeIdentification: Joi.number().min(1).max(2).precision(1).required(),
            idTypePerson: Joi.number().min(1).max(2).precision(1).required(),
            date: Joi.string()
        })
        
        const {error} = shemaCreate.validate(req.body);
        if(error) return await res.status(400).json(error.details[0].message);

        return next();
    },


    async registerComputerStundent(req, res, next) {

        // Validacion de datos
        const shemaCreate = Joi.object({
            brand: Joi.string().min(3).max(255).required(),
            model: Joi.string().min(3).max(255).required(),
            serial: Joi.string().min(3).max(255).required(),
            studentCode: Joi.number().required(),
            date: Joi.string()  
        })
        
        const {error} = shemaCreate.validate(req.body);
        if(error) return await res.status(400).json(error.details[0].message);

        return next();
    },


    async registerStudent(req, res, next) {

        // Validacion de datos
        const shemaCreate = Joi.object({
            name: Joi.string().min(3).max(255).required(),
            lastName: Joi.string().min(3).max(255).required(),
            identification: Joi.number().required(),
            idTypeIdentification: Joi.number().min(1).max(2).required(),
            idTypePerson: Joi.number().min(1).max(2).required(),

            studentCode: Joi.required(),
            email: Joi.string().required().email(),
            idCareer: Joi.number().min(1).max(10).required(),
            promotion: Joi.number().min(1).max(13).required(),
            
        })
        
        const {error} = shemaCreate.validate(req.body);
        if(error) return await res.status(400).json(error.details[0].message);

        return next();
    },


    async getStudent(req, res, next) {

        // Validacion de datos
        const shemaCreate = Joi.object({
            studentCode: Joi.number().required()
            
        })
        
        const {error} = shemaCreate.validate(req.body);
        if(error) return await res.status(400).json(error.details[0].message);

        return next();
    },


    async getIngressComputer(req, res, next) {

        // Validacion de datos
        const shemaCreate = Joi.object({
            registerCode: Joi.number().min(100000).max(109999).required()
        })
        
        const {error} = shemaCreate.validate(req.body);
        if(error) return await res.status(400).json(error.details[0].message);

        return next();
    },

    async registerExit(req, res, next) {

        // Validacion de datos
        const shemaCreate = Joi.object({
            id: Joi.number().min(100000).max(109999).required()
        })
        
        const {error} = shemaCreate.validate(req.body);
        if(error) return await res.status(400).json(error.details[0].message);

        return next();
    }


}