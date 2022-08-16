const Sequelize = require('sequelize');
const person = require('../../models').person;


module.exports = {

    // metodo unicamente para insertar a la DB los datos de un invitado

    async create(req, res, next) {


        // Se valida si ya existe el invitado 
        
        const personExist = await person.findAll({
            attributes: ['id'],
            where: {
                identification: req.body.identification
            }
        });


        if (personExist.length === 0) {
            await person
                .create({
                    name: req.body.name,
                    lastname: req.body.lastName,
                    identification: req.body.identification,
                    idTypeIdentification: req.body.idTypeIdentification,
                    idTypePerson: req.body.idTypePerson
                })
                .then(person => {
                    res.locals.person = person.dataValues.id;
                    console.log(res.locals.person)
                    next();
                })
                .catch(error => res.status(400).json(error));
        } else {
            res.locals.person = personExist[0].dataValues.id ;
            console.log(res.locals.person)
            next();
        }
    },

}