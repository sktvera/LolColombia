let objetos = [{
    id : 1,
    nombre:'Draven',
    tipo:'vela',
    vida:12,
    mana:12,
    regMana:34.4,
    velocidad:34.33,
    daño:23,
    velAtaque:332,
    rango:232,
    resMagia:46676,
    imagen:'Draven.png'

},
{   id : 2,
    nombre: 'Caitlyn',
    tipo:'Tirador',
    vida:12,
    mana:12,
    regMana:34.4,
    velocidad:34.33,
    daño:23,
    velAtaque:332,
    rango:232,
    resMagia:46676,
    imagen:'Caitlyn.png'
},{
    id : 3,
    nombre: 'Graves',
    tipo:'Tirador',
    vida:12,
    mana:12,
    regMana:34.4,
    velocidad:34.33,
    daño:23,
    velAtaque:332,
    rango:232,
    resMagia:46676,
    imagen:'Graves.png'
},{
    id : 4,
    nombre: 'Gragas',
    tipo:'Mago',
    vida:12,
    mana:12,
    regMana:34.4,
    velocidad:34.33,
    daño:23,
    velAtaque:332,
    rango:232,
    resMagia:46676,
    imagen:'Gragas.png'
},{
    id : 5,
    nombre: 'Garen',
    tipo:'Mele',
    vida:12,
    mana:12,
    regMana:34.4,
    velocidad:34.33,
    daño:23,
    velAtaque:332,
    rango:232,
    resMagia:46676,
    imagen:'Garen.png'
},
]

const usersController =
 {

    perfiles:function(req,res){
        res.render('users/perfil',{datos:objetos});
    },

    campeones: function(req, res) {
        let id = req.params.id;
        let campeonEncontrado;

        for(let i = 0; i < objetos.length; i++){
            if(objetos[i].id == id ){
                campeonEncontrado = objetos[i];
                break
            }
        }

         res.render('users/campeones',{campeonDetalle:campeonEncontrado})
       },
   

}
module.exports = usersController


