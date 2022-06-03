let express = require('express');
let router = express.Router();
const campeonesController = require('../controllers/campeonesController');

// Ruta parametrizada con el nombre del campeon

router.get('/:id', campeonesController.detalle);
router.get('/', campeonesController.listaDeCampeones)

module.exports = router;