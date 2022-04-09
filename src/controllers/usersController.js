const fs = require('fs');
const path = require('path');

const champsFilePath = path.join(__dirname,'../database/champsDatabase.json')
const champs = JSON.parse(fs.readFileSync(champsFilePath,'utf-8'));
const usersController =
 {

    perfiles:function(req,res){
         res.render('users/perfil',{datos:champs}); 
        
    },

    campeones: function(req, res) {
        let id = req.params.id;
        let campeonEncontrado;

        for(let i = 0; i < champs.length; i++){
            if(champs[i].id == id ){
                campeonEncontrado = champs[i];
                break
            }
        }

         res.render('users/campeones',{campeonDetalle:campeonEncontrado})
       },
   

}
module.exports = usersController


