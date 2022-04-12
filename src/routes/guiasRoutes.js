const express = require('express');
const router = express.Router();

const guiasController = require('../controllers/guiasController');

// /*** CREATE ONE PRODUCT ***/ 
router.post('/create', guiasController.create); 
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