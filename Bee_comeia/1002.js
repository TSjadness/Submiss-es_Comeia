
// // {
// //     this.radius = radius;
  
// //     this.area = function () 
// //     {
// //         return  Math.PI * this.radius * this.radius;
// //     };

// // }
//  var n = new circulo(2); //passa o valor 2 por paramentro
//  console.log('A =', n.area().toFixed(4));
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = 3.14159;
let raio = parseFloat(lines[0]);
let area = n * (raio*raio);
let resul = area.toFixed(4);
console.log(`A= ${resul}`);  