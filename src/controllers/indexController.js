const fs = require('fs');
const path = require('path');

// const champsFilePath = path.join(__dirname,'../database/champsDatabase.json')
/* const champs = JSON.parse(fs.readFileSync(champsFilePath,'utf-8')); */


let indexController = {
    home: function(req, res) {
        /* Mostrar el home */
        res.render('index');
    }


}
module.exports = indexController;