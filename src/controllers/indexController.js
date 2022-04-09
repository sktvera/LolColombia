const fs = require('fs');
const path = require('path');

const champsFilePath = path.join(__dirname,'../database/champsDatabase.json')
/* const champs = JSON.parse(fs.readFileSync(champsFilePath,'utf-8')); */


let indexController = {
    home: function(req, res) {
        /* Mostrar el home */

        const champs = JSON.parse(fs.readFileSync(champsFilePath,'utf-8'));
        res.render('index');
    },

    login: function(req, res) {
        /* Mostrar el login */
        res.render('login');
    },

    register: function(req, res) {
        /* Mostrar el register */
        res.render('register');
    }, create:function(req,res){
       
            let nuevoCampeon = req.body
            let campeones = champs;
   

        console.log(nuevoCampeon)
    }


}
module.exports = indexController