const {
    sequelize
} = require('../../models');

const carnet = require('../../models').carnetRequest;
const person = require('../../models').person;
const student = require('../../models').student;


module.exports = {

    async register(req, res) {


        // Se valida si ya existe una solicitud en proceso de carnet

        const carnetExist = await carnet.findOne({
            where: {
                idStudent: res.locals.idStudent,
                state: 'Pendiente'
            }
        });

        if (carnetExist === null) {
            await carnet
                .create({
                    idStudent: res.locals.idStudent,
                    requestDate: new Date(),
                    state: 'Pendiente'
                })
                .then(carnet => {
                    res.json(carnet);
                })
                .catch(error => res.status(400).json(error));
        } else {
            res.json({
                error: 1,
                message: `Ya se encuentra un solicitud en proceso sobre el registro numero ${carnetExist.dataValues.id}`
            })
        }

    },


    async get(req, res, next) {


        const carnetResult = await carnet.findOne({
            attributes: ['id', 'state', 'requestDate','closeDate'],
            where: {
                id: req.params.id
            },
            include: [{
                attributes: ['idPerson','studentCode','cellphone','email', 'idCareer', 'promotion'],
                model: student,
                required: true,
                include: [{
                    attributes: ['name','lastname'],
                    model: person,
                    required: true
                    
                }]
            }]
        });



        if (carnetResult !== null) {
            res.json(carnetResult);
        } else {
            res.json({
                error: 1,
                message: `No se ha encontrado el registro con el id ${req.params.id}`
            });
        }


    }
}