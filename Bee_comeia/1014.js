var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const distancia = parseInt(lines[0]);
const gasolina = parseFloat(lines[1]);
const consumoMedio = distancia/gasolina;
console.log(consumoMedio.toFixed(3)+" km/l");

