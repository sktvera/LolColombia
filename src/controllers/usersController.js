const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

/** Delete file when it's not the right extension */



const usersController =
 {
     login: function(req, res) {
        /* Mostrar el login */
        res.render('./users/login');
    },

    register: function(req, res) {
        /* Mostrar el register */
        res.render('./users/register');
    },

    create: function(req, res) {
        let errors = validationResult(req);
        let errMap = errors.mapped();
        // Elimina el archivo si el formato no coincide
        if (req.file && errMap.avatar) {
            let filePath = path.join(__dirname, '../../public/images/avatars', req.file.filename);
            try {
                fs.unlinkSync(filePath);
                //file removed
            }
            catch(err) {
                console.error(err);
            }
            console.log('archivo eliminado');
        }
        // Renderiza la vista si existen errores
        if (errors) {
            console.log(errors);
            res.render('./users/register', {
                errors : errors.mapped(),
                old : req.body
            })
        }
        // Envia mensaje si todo sale bien
        res.send('Todo bien');
    }
}

module.exports = usersController;