const express = require('express');
 const router = express.Router();
 const indexController = require('../controllers/indexController')

/* GET home page. */ 
/* http: *///localhost/home/register
router.get('/',indexController.home);
router.get('/home',indexController.home)


module.exports = router;
