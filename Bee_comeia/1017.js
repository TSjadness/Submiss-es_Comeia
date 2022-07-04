var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var TempoGasto = parseInt(lines[0]);
var Velocidade = parseInt(lines[1]);
 
var TotalPercorrido = TempoGasto * Velocidade;
var QuantLitros = TotalPercorrido / 12;

console.log(QuantLitros.toFixed(3)+" ");