const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require ('multer');
const guiasController = require('../controllers/guiasController');
const { join } = require('path');

const configuracionImagen = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../../public/images/subidas'));
    },
    filename:function(req,file,cb){
        let imageName = Date.now() + file.originalname;
        cb(null,imageName);
    }
});

const uploadFile = multer({storage:configuracionImagen})



<<<<<<< HEAD
// /*** CREATE ONE PRODUCT ***/ 
router.post('/create',uploadFile.single('imageGuiaCreate'), guiasController.create); 
=======
// /*** Crear una guia ***/ 
router.post('/create', guiasController.create); 
>>>>>>> 66a78192f79247b782d8fa19ef8aef952778da61
router.get('/createForm', guiasController.createForm); 

// /*** Obtener la guia de un campeon ***/ 
router.get('/guiaCampeon/:id',guiasController.guiaCampeon)

// /*** Editar una guia ***/ 
router.get('/edit/:id', guiasController.edit); 
router.put('/edit/:id',guiasController.update);

// /*** Borrar una guia ***/ 
router.delete('/delete/:id', guiasController.destroy); 


module.exports = router;