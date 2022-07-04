var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);

var media = (A*3.5 + B*7.5)/11; 
let resul = media.toFixed(5);

console.log(`MEDIA = ${resul}`);  


