var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var quantDias = parseInt(input);  

let quantAnos , quantMeses;

quantAnos = parseInt(quantDias / 365);
quantDias = quantDias % 365;

quantMeses = parseInt(quantDias / 30);
quantDias = quantDias % 30;

let result = `${quantAnos} ano(s)
${quantDias} mes(es)
${quantMeses} dia(s)`

console.log(result);