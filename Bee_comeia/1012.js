var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = lines.shift().split(' ');

var A = parseFloat(valor[0]); 
var B = parseFloat(valor[1]); 
var C = parseFloat(valor[2]);

console.log("TRIANGULO: " + parseFloat((A* C)/2).toFixed(3)); 
console.log("CIRCULO: " + parseFloat(3.14159 *Math.pow(C,2)).toFixed(3)); 
console.log("TRAPEZIO: " + parseFloat(((A + B)/2)*C).toFixed(3)); 
console.log("QUADRADO: " + parseFloat(Math.pow(B,2)).toFixed(3)); 
console.log("RETANGULO: " + parseFloat(A *B).toFixed(3));







// var triangulo = ((A * C)/2);
// console.log(`TRIÂNGULO: ${triangulo.toFixed(3)}`); 

// var circulo = ((C*C) * 3.14159);
// console.log(`CIRCULO: ${circulo.toFixed(3)}`);

// var trapezio = (((A+B) * C)/2 );
// console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);

// var quadrado = (B*B);
// console.log(`QUADRADO: ${quadrado.toFixed(3)}`);

// var retangulo = (A*B);
// console.log(`RETANGULO: ${retangulo.toFixed(3)}`);