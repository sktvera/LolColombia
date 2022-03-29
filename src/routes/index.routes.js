const express = require('express');
 const router = express.Router();
 const controller = require('../controllers/index.controller')

/* GET home page. */
router.get('/',controller.home)

router.get('/home',controller.home);



module.exports = router;
