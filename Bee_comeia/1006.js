var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);

var media = (A*2 + B*3 + C*5)/10; 
let resul = media.toFixed(1);

console.log(`MEDIA = ${resul}`);  
