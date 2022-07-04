var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [n1, x1] = lines[0].split(' ').map(item => parseFloat(item));
var [n2, x2] = lines[1].split(' ').map(item => parseFloat(item));

var distance = Math.sqrt(Math.pow(n2 - n1, 2) + Math.pow(x2 - x1, 2)).toFixed(4);

console.log(distance);