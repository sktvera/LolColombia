const express = require('express');
 const router = express.Router();
 const indexController = require('../controllers/indexController')

/* GET home page. */ 
/* http: *///localhost/home/register
router.get('/',indexController.home)

router.get('/login',indexController.login);

router.get('/register',indexController.register);





module.exports = router;
