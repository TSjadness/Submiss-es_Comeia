var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor1 = parseInt(lines[0]);  
var valor2 = valor1 % 3600; 
var valor3 = valor2 % 60;

var horas = parseInt(valor1 / 3600);
var minutos = parseInt(valor2 / 60);
var segundos = parseInt(valor3);

console.log(horas + ":" + minutos + ":" + segundos);