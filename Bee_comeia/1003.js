var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[2]);
var b = parseInt(lines[3]);
var soma = a + b;

console.log(`SOMA = ${soma}`);  
