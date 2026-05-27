/* 
    Calculate properties of a circle, using the definitions here.
        ● Store a radius into a variable.
        ● Calculate the circumference based on the radius, and output "The circumference is NN".
        ● Calculate the area based on the radius, and output "The area is NN".
*/

let radius = 4;
const pi = 3.14;

let circumference = 2*pi*radius;
let area = pi*(radius**2);

console.log(`The circumference is ${circumference}.`);
console.log(`The area is ${area}.`);