var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var Nome = String(lines[0]);
var SalarioFixo = parseFloat(lines[1]);
var Vendas = parseFloat(lines[2]);

var comissao = (Vendas * 0.15); 
var total = (SalarioFixo + comissao);

//console.log(`Vendedor =  ${Nome}`); 
console.log(`TOTAL = R$ ${total.toFixed(2)}`); 
