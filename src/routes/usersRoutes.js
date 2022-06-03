const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body, check } = require('express-validator');
const usersController = require('../controllers/usersController.js');
/** Configuracion de Multer*/

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/avatars'));
    },
    filename: function(req, file, cb) {
        let imageName = Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    }
});

const uploadFile = multer({ storage });

/** Final de la configuracion*/

/** Validacion de datos con Express Validator */
const validacion = [
    check('nombre').notEmpty().withMessage('Debes completar este campo'),
    check('alias').notEmpty().withMessage('Debes completar este campo'),
    check('email')
        .notEmpty().withMessage('Debes completar este campo').bail()
        .isEmail().withMessage('Debes ingresar un email valido'),
    check('password')
        .notEmpty().withMessage('Debes completar este campo').bail()
        .isLength({min: 8}).withMessage('La contrasenia debe ser de minimo 8 caracteres'),
    check('avatar').custom((value, { req }) => {
        let file = req.file;
        let ext = ['.jpg', '.png', '.JPG', '.PNG'];
        if (file){
            if (!ext.includes(path.extname(file.originalname))) {
                throw new Error('Debes incluir un formato valido');
            }
        }
        return true;
    })
]
/** Final de la validacion */

router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/register', uploadFile.single('avatar'), validacion, usersController.create);








module.exports = router;
