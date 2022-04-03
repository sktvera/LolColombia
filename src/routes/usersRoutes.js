const express = require('express');
 const router = express.Router();
 const usersController = require('../controllers/usersController.js')

/* GET home page. */ 
/* http: *///localhost/users/campeones/1
router.get('/campeones/:id',usersController.campeones)
router.get('/perfiles',usersController.perfiles)






module.exports = router;
