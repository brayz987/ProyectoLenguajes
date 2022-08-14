const Sequelize = require('sequelize');
const computer = require('../../models').computer;


module.exports = {

    async create(req, res, next) {

        
        // Se valida si ya existe el invitado 
        
        const computerExist = await computer.findAll({
            attributes: ['id'],
            where: {
                serial: req.body.serial
            }
        });


        if( computerExist.length === 0 ) {
            await computer
            .create ({
                brand: req.body.brand,
                model: req.body.model,
                serial: req.body.serial
            })
            .then ( computer => {
                res.locals.computer = computer; 
                next();
            })
            .catch ( error => res.status(400).json(error));
        }else {
            res.locals.computer = computerExist[0] ;
            next();
        }
        
    },


    // async list(_, res) {
    //     return await  user.findAll ({})
    //         .then(user => res.json(user))
    //         .catch ( error => res.status(400).json(error))
    // },

    // async find (req, res) {
    //     return await user.findAll({
    //         where: {
    //             email: req.body.email,
    //         }
    //         .then(user => res.json(user))
    //         .catch ( error => res.status(400).json(error))
    //     })
    // }
}