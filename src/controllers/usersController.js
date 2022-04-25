const fs = require('fs');
const path = require('path');

// const champsFilePath = path.join(__dirname,'../database/champsDatabase.json')
// const champs = JSON.parse(fs.readFileSync(champsFilePath,'utf-8'));
const usersController =
 {
     login: function(req, res) {
        /* Mostrar el login */
        res.render('./users/login');
    },

    register: function(req, res) {
        /* Mostrar el register */
        res.render('./users/register');
    },
   

}
module.exports = usersController;


