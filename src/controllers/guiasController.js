const fs = require('fs');
const path = require('path');

const champsFilePath = path.join(__dirname,'../database/champions.json')
const champs = JSON.parse(fs.readFileSync(champsFilePath,'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {

	listaDeCampeones: function(req,res){

		res.render("guias/guiasList",{datos:champs})

	},
	guiaCampeon: function(req,res) {

		let idCampeonSeleccionado = req.params.id;
		let campeonEncontrado = null;
	 
		for(let p of champs){
			if(p.id == idCampeonSeleccionado ){
				campeonEncontrado = p;
				break
			}
		}

		res.render("guias/guiaCampeon",{campeonDetalle:campeonEncontrado})
	   },

	createForm: (req, res) => {

		res.render("guias/guiaCreate")
		},
    create: (req, res) => {
<<<<<<< HEAD
		
		
	
		 
	
		idNuevo=0;

		for (let s of champs){
			if (idNuevo<s.id){
				idNuevo=s.id;
			}
		}

		idNuevo++;

		let nombreImagen = req.file.filename;
=======

		let campeon = champs;
		let idCampeonNuevo = campeon[campeon.length-1].id + 1;
>>>>>>> 66a78192f79247b782d8fa19ef8aef952778da61

		// forma 1 

		let nuevoProducto = {
			id: idNuevo,
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
			imagen:nombreImagen
		};

		// forma 2
		// let nuevoProducto2 = req.body;
		// nuevoProducto2.id= idNuevo;
		// nuevoProducto2.image = "img-camara-nikon.jpg";
		// console.log(nuevoProducto2);
		campeon.push(nuevoProducto);
		fs.writeFileSync(champsFilePath , JSON.stringify(campeon,null,' '));
		res.redirect('/home');
<<<<<<< HEAD

		console.log(nuevoProducto) 




=======
		console.log(nuevoProducto)
>>>>>>> 66a78192f79247b782d8fa19ef8aef952778da61
	},

	edit: (req, res) => {

		let idcampeonSeleccionado= req.params.id;
		let campeonEncontrado=null;

		for (let p of champs){
			if (p.id==idcampeonSeleccionado){
				campeonEncontrado=p;
				break;
			}
		};

		res.render('guias/guiaEditForm',{campeon: campeonEncontrado});
	},

	update: (req, res) => {	// Update - Method to update
	
		let campeonEditado = req.body;
		let idCampeonBuscado = req.params.id;
		let campeon = champs;

		for (let p of campeon){
			if (p.id==idCampeonBuscado){
				p.nombre=campeonEditado.nombre;
				p.tipo=campeonEditado.tipo;
				p.vida=campeonEditado.vida;
				p.mana=campeonEditado.regMana;
				p.regMana=campeonEditado.regMana;
				p.velocidad=campeonEditado.velocidad;
				p.daño=campeonEditado.daño;
				p.velAtaque=campeonEditado.velAtaque;
				p.rango=campeonEditado.rango;
				p.resMagia=campeonEditado.resMagia;
				break;
			}
		}

		fs.writeFileSync(champsFilePath, JSON.stringify(campeon,null,' '));

		res.redirect("/home");
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let idCampeonSeleccionado = req.params.id;
		let campeonEncontrado = null;

		for (let p of champs){
			if (p.id==idCampeonSeleccionado){
				campeonEncontrado=p;
				break;
			}
		}

		let campeon2 = champs.filter(function(e){
			return e.id!=campeonEncontrado.id;
		})

		fs.writeFileSync(champsFilePath, JSON.stringify(campeon2,null,' '));
		res.redirect("/home");
	}
}

module.exports = controller;