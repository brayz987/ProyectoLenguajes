const Sequelize = require('sequelize');
const ingress = require('../../models').ingress;


module.exports = {

    async createAccessGuest(req, res) {
        await ingress
            .create ({
                dateHourIngress: new Date(),
                idPersonIngress: res.locals.student.dataValues.idperson,
                idComputer: res.locals.computer.dataValues.id,
            })
            .then ( ingress => {
                res.json({
                    "people": res.locals.people,
                    "computer": res.locals.computer,
                    "ingress": ingress,
                })
            })
            .catch ( error => res.status(400).json(error));
    },

}   