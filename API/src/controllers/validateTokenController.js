'use strict';

const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    // Middleware creado para validar el token con el servidor
    async validateToken(req,res,next){

        if(typeof(req.header('auth')) === 'undefined') return await res.status(401).json({message: 'Acceso denegado'});

        let token = req.header('auth');
        let buff = new Buffer(token,'base64');
        token = buff.toString('ascii') 
        if(!token) return await res.status(401).json({message: 'Acceso denegado'});

        try {
            const verifyToken = jwt.verify(token, process.env.SECRET_TOKEN);
            req.user = verifyToken;
            next();
        } catch (error) {
            return await res.status(401).json({message: 'Token no valido'});
        }
    }
}