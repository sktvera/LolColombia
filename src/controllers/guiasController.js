const fs = require('fs');
const path = require('path');

const champsFilePath = path.join(__dirname,'../database/champsDatabase.json')
const champs = JSON.parse(fs.readFileSync(champsFilePath,'utf-8'));


const controller = {

	listaDeCampeones:function(req,res){

		
		res.render('guias/guiasList',{datos:champs}); 
	   
	},

	createForm: (req, res) => {
			
	
		res.render('guias/guiaCreate')
	
			   
			},

    create: (req, res) => {
			
		
		let campeon = champs;

		let idCampeonNuevo = campeon[campeon.length-1].id + 1;


		// forma 1 

		let nuevoProducto = {
			id: campeon[campeon.length-1].id + 1,
			nombre: req.body.nombre,
			tipo: req.body.tipo,
			vida: req.body.vida,
			mana: req.body.mana,
			regMana: req.body.regMana,
			velocidad: req.body.velocidad,
			daño: req.body.daño,
			velAtaque: req.body.velAtaque,
			rango: req.body.rango,
			resMagia: req.body.resMagia,
			imagen:"Draven.png"
		};


		// forma 2

		// let nuevoProducto2 = req.body;
		// nuevoProducto2.id= idNuevo;
		// nuevoProducto2.image = "img-camara-nikon.jpg";
		// console.log(nuevoProducto2);

console.log(req.body)
		campeon.push(nuevoProducto);
	
		fs.writeFileSync(champsFilePath , JSON.stringify(campeon,null,' '));

		res.redirect('/home');

	},

guiaCampeon: function(req, res) {



	let idCampeonSeleccionado = req.params.id;
	let campeonEncontrado = null;
 
	for(let i = 0; i < champs.length; i++){
		if(champs[i].id == idCampeonSeleccionado ){
			campeonEncontrado = champs[i];
			break
		}
	}

	
 
	 res.render('guias/guiaCampeon',{campeonDetalle:campeonEncontrado})
   }
	
	
}

module.exports = controller;



