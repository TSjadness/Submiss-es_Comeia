var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines[0]);
var resul = (60 * A) /30;
console.log(resul+" minutos");