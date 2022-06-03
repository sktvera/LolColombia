let fs = require('fs');
const path = require('path');

var campeones = fs.readFileSync(path.resolve(__dirname + '/champions.json')); // Lee el archivo champions.json

campeones = JSON.parse(campeones); // Transforma el archivo JSON en un objeto JS

const champName = Object.keys(campeones.data);

module.exports = {campeones, champName};