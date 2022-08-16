const Sequelize = require('sequelize');
const student = require('../../models').student;
const person = require('../../models').person;

const findOne = async (studentCode) => {
    const studentExist = await student.findAll({
        attributes: ['id', 'idperson'],
        where: {
            studentCode: studentCode
        }
    });
    return await studentExist;
}

module.exports = {

    // metodo unicamente para insertar a la DB los datos de un invitado

    async create(req, res) {
        // Se valida si ya existe el estudiante por el codigo estudiantil 
        const studentExist = await findOne(req.body.studentCode);
        console.log(studentExist);

        if (studentExist.length === 0) {
            await student
                .create({
                    studentCode: req.body.studentCode,
                    email: req.body.email,
                    idCareer: req.body.idCareer,
                    promotion: req.body.promotion,
                    idPerson: res.locals.person,
                })
                .then(student => {
                    res.json(student);
                })
                .catch(error => res.status(400).json(error));
        } else {
            res.json({
                'message': 'El estudiante ya existe'
            })
        }
    },


    async validateStudent(req, res, next) {
        // Se valida si ya existe el estudiante por el codigo estudiantil 

        const studentExist = await findOne(req.body.studentCode);


        if (studentExist.length === 0) {
            return res.json({
                "error": 1,
                "message": "El codigo estudiantil no existe"
            });
        } else {
            res.locals.person = studentExist[0].dataValues.idperson;
            next();
        }
    },



    async getStudent(req, res) {
        // Se valida si ya existe el estudiante por el codigo estudiantil 

        const studentData = await student.findAll({
            attributes: ['id','email','idCareer'],
            where: {
                studentCode: req.body.studentCode
            },
            include: [{
                model: person,
                attributes:  ['name', 'lastname','idTypePerson'],
                required: true
            }]
        });

        if (studentData.length === 0) {
            return await res.json({
                "error": 1,
                "message": "El estudiante no existe"
            });
        } else {
            return await res.json(studentData);
        }

    },

    async getCodeStudent(req,res) {

        const codeStudent = await student.findAll({
            attributes: ['studentCode'],
            where: {
                idPerson: res.locals.person
            }
        });
        res.json({
            ingressData: res.locals.ingressData[0],
            studentCode: codeStudent[0].dataValues.studentCode
        })
    }


}