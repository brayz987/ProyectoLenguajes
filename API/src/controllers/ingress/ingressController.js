const Sequelize = require('sequelize');
const ingress = require('../../models').ingress;
const person = require('../../models').person;
const computer = require('../../models').computer;


module.exports = {

    async createIngressComputer(req, res) {
        await ingress
            .create({
                dateHourIngress: new Date(),
                idPersonIngress: res.locals.person,
                idComputer: res.locals.computer.dataValues.id,
                idTypeIngress: 1
            })
            .then(ingress => {
                res.json({
                    "people": res.locals.people,
                    "computer": res.locals.computer,
                    "ingress": ingress,
                })
            })
            .catch(error => res.status(400).json(error));
    },


    async getIngressComputer(req, res, next) {
        const ingressData = await ingress.findAll({
            attributes: ['id', 'dateHourIngress', 'dateHourExit'],
            where: {
                id: req.body.registerCode
            },
            include: [{
                model: person,
                attributes: ['id', 'name', 'lastname', 'idTypePerson', 'idTypeIdentification', 'identification'],
                required: true
            }, {
                model: computer,
                attributes: ['brand', 'model', 'serial'],
                required: true
            }]
        });

        if (ingressData.length === 0) {
            res.json({
                error: 1,
                message: "El codigo no existe"
            })
        } else {
            if (ingressData[0].dataValues.person.dataValues.idTypePerson === 2) {
                res.locals.ingressData = ingressData;
                res.locals.person = ingressData[0].dataValues.person.dataValues.id;
                next()
            } else {
                res.json({
                    "ingressData": ingressData[0]
                });
            }
        }
    },

    async registerExit(req, res) {
        console.log(req.id)
        await ingress
            .update({
                dateHourExit: new Date()
            }, {
                where: {
                    id: req.body.id
                }
            })
            .then(() => {
                res.json({
                    "error": 0,
                    "message": "Se ha registrado las salida correctamente"
                })
            })
            .catch(error => res.status(400).json(error));
    },


    async registerGuest(req, res) {
        await ingress
            .create({
                dateHourIngress: new Date(),
                idPersonIngress: res.locals.person,
                motivo: req.body.motive,
                idTypeIngress: 2
            })
            .then(ingress => {
                res.json({
                    "people": res.locals.people,
                    "ingress": ingress
                })
            })
            .catch(error => res.status(400).json(error));
    },


    async getGuest(req, res) {
        await ingress
            .findOne({
                attributes: ['id', 'dateHourIngress', 'dateHourExit', 'motivo','idTypeIngress'],
                where: {
                    id: req.params.id
                },
                include: [{
                    attributes: ['name', 'lastname', 'identification', 'idTypeIdentification'],
                    model: person,
                    required: true
                }]
            })
            .then(ingress => {
                if(ingress.dataValues.idTypeIngress !== 2){
                    res.json({
                        error: 1,
                        message: "Id del registro es invalido por favor verifiquelo"
                    })
                }else{
                    res.json(ingress);
                }
            })
    }

}