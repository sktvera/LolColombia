const champs = require('../database/champions');
const campeones = champs.campeones;
const listaDeCampeones = champs.champName;

let indexController = {
    home: function(req, res) {
        /* Mostrar el home */
        res.render('index', {'campeones': campeones, 'listaDeCampeones' : listaDeCampeones});
    }
}

module.exports = indexController;