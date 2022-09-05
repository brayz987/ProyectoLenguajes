const nodemailer = require("nodemailer");
const fs = require("fs");
const handlebars = require("handlebars");
const student = require('../../models').student;
const person = require('../../models').person;
require('dotenv').config();


module.exports = {


  async sendMail(studentCode) {


    // Se obtiene la informacion del estudiante 
    let studentData = await student.findOne({
      attributes: ['id', 'studentCode'],
      where: {
        studentCode: studentCode
      },
      include: [{
        model: person,
        attributes: ['name', 'lastname'],
        required: true
      }]
    });

    studentData = studentData.dataValues;

    // Se lee el template del mail y se remplazan los respectivos valores
    const html = fs.readFileSync(__dirname + '/mail.html', 'utf8');
    const template = handlebars.compile(html);
    const replacements = {
      code: studentCode,
      name: studentData.person.dataValues.name,
      lastname: studentData.person.dataValues.lastname,
      fecha: new Date()
      
    };
    const htmlToSend = template(replacements);

    const smtpTransport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
    });


    const mailOptions = {
      from: "Sistema de registros Uniempresarial",
      to: 'brayz987@gmail.com',
      subject: 'Solicitud de carnet creada | Estudianta id: ' + studentCode,
      html: htmlToSend
    }
    info = await smtpTransport.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);

  }


}