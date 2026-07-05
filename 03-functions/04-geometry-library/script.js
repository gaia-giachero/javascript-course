/*
    ● Create a function called calcCircumference:
        ○ Pass the radius to the function
        ○ Calculate the circumference based on the radius, and output "The circumference is NN"
    ● Create a function called calcArea:
        ○ Pass the radius to the function.
        ○ Calculate the area based on the radius, and output "The area is NN" 
*/

function calcCircumference(radius){
    const circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference}`);
}

function calcArea(radius){
    const area = Math.PI * (radius ** 2);
    console.log(`The area is ${area}`);
}

calcCircumference(5);
calcArea(5);