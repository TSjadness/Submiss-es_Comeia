var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);
var D = parseFloat(lines[3]);

var media = (A * B - C * D); 
//let resul = media.toFixed(1);

console.log(`DIFERENÇA = ${media}`); 