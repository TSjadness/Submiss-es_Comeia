var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [cod1,quant1,valor1] = lines.shift().split(" ");
var [cod2,quant2,valor2] = lines.shift().split(" ");

var total1 = quant1 *valor1;
var total2 = quant2 *valor2;

var total_compra = total1 + total2;
console.log(`VALOR A PAGAR: R$ ${total_compra.toFixed(2)}`); 