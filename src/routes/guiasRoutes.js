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



// /*** CREATE ONE PRODUCT ***/ 
router.post('/create',uploadFile.single('imageGuiaCreate'), guiasController.create); 
router.get('/createForm', guiasController.createForm); 

// /*** GET ONE PRODUCT ***/ 
router.get('/guiaCampeon/:id',guiasController.guiaCampeon)

// /*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', guiasController.edit); 
router.put('/edit/:id',guiasController.update);

// /*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', guiasController.destroy); 


router.get('/listaDeCampeones',guiasController.listaDeCampeones)

module.exports = router;