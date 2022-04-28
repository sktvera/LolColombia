const express = require('express');
const router = express.Router();

const guiasController = require('../controllers/guiasController');

// /*** Crear una guia ***/ 
router.post('/create', guiasController.create); 
router.get('/createForm', guiasController.createForm); 

// /*** Obtener la guia de un campeon ***/ 
router.get('/guiaCampeon/:id',guiasController.guiaCampeon)

// /*** Editar una guia ***/ 
router.get('/edit/:id', guiasController.edit); 
router.put('/edit/:id',guiasController.update);

// /*** Borrar una guia ***/ 
router.delete('/delete/:id', guiasController.destroy); 


module.exports = router;