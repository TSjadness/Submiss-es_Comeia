var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var R = parseInt(lines[0]);
//var Pi = parseFloat(lines[1]);
//var resultado = (4/3.0) * Pi *Math.pow(R, 3);
var volume = (( (4/3) * 3.14159) * (R * R * R) );

 console.log(`VOLUME = ${volume.toFixed(3)}`); 