const fs = require('fs');
const path = require('path');

const champsFilePath = path.join(__dirname,'../database/champsDatabase.json')
const champs = JSON.parse(fs.readFileSync(champsFilePath,'utf-8'));


const controller = {
    create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
			
	
        let nuevoCampeon = req.body
        let campeones = champs;


    


		let idNuevo = campeones[campeones.length-1].id + 1;
 

		// forma 1 

		let nuevoProducto = {
			id: idNuevo,
			nombre: req.body.name,
			tipo: req.body.tipo,
			vida: req.body.vida,
			mana: req.body.mana,
			daño: req.body.daño,
            velAtaque: req.body.velAtaque,
			rango: req.body.rango,
			resMagia: req.body.resMagia,

			imagen: "Gragas.png"

           
		}; 
        console.log(nuevoProducto)

        
		campeones.push(nuevoProducto);


        fs.writeFileSync(champsFilePath, JSON.stringify(campeones,null,' '));

		res.redirect('/home');
		// forma 2

		// let nuevoProducto2 = req.body;
		// nuevoProducto2.id= idNuevo;
		// nuevoProducto2.image = "img-camara-nikon.jpg";
		// console.log(nuevoProducto2);


		/* productos.push(nuevoProducto);
	
		fs.writeFileSync(productsFilePath, JSON.stringify(productos,null,' '));

		res.redirect('/'); */

	},

}

module.exports = controller;