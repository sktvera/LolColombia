const champs = require('../database/champions');
const campeones = champs.campeones;
const listaDeCampeones = champs.champName;

const campeonesController = {
    detalle : function(req, res) {
        var champ = req.params.id;
        const path = campeones.data[`${champ}`];
        if (campeones.data[`${champ}`] !== undefined){
        res.render('campeonDetalle', {'hola': campeones, 'champ': champ, 'path' : path});
        }
        else {
            let champsArr = champs.champName;
            let ammount = (champsArr.length + 1) / 6;
            res.send('The ammount of champs is ' + ammount);
        }
    },
    listaDeCampeones : function(req, res) {
        res.render('listadeCampeones', {'campeones': campeones, 'listaDeCampeones' : listaDeCampeones});
    }
};

module.exports= campeonesController;