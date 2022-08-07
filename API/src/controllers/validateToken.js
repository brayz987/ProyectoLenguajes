'use strict';

const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    // Middleware creado para validar el token con el servidor
    async validateToken(req,res,next){
        const token = req.header('auth-token');
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