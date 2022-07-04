var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const valor = input.split(" ").map(item => parseInt(item));
var A = parseFloat(valor[0]);
var B = parseFloat(valor[1]);
var C = parseFloat(valor[2]);

const maiorAB = (A + B + Math.abs(A - B)) /2;
const result = (C + maiorAB + Math.abs(C - maiorAB)) /2;
console.log(`${result} eh o maior`); 