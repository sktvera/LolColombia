const express = require('express');
const router = express.Router();

const guiasController = require('../controllers/guiasController');

router.post('/create', guiasController.create); 
router.get('/createForm', guiasController.createForm); 
router.get('/guiaCampeon/:id',guiasController.guiaCampeon)






router.get('/listaDeCampeones',guiasController.listaDeCampeones)

module.exports = router;