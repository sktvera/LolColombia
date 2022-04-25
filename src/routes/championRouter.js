let express = require('express');
let router = express.Router();
let fs = require('fs');
const path = require('path');

var jsonChamps = fs.readFileSync(path.resolve(__dirname, '../database/champions.json'));

jsonChamps = JSON.parse(jsonChamps);

router.get('/:id', function(req, res) {
    const champ = req.params.id;
    if (jsonChamps.data[`${champ}`] !== undefined)
    {
    res.send(jsonChamps.data[`${champ}`]);
    }
    else {
        res.send("Lo sentimos, este campeon no existe")
    }
})

module.exports = router;