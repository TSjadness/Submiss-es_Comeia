var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var Funcionario = parseInt(lines[0]);
var Hora_trb = parseInt(lines[1]);
var Valor_hora = parseFloat(lines[2]);

var salario = (Hora_trb * Valor_hora); 
console.log(`NUMBER = ${Funcionario}`); 
console.log(`SALARY = U$ ${salario.toFixed(2)}`); 