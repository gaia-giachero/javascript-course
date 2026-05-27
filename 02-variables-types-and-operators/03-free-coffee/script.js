/*
    ● Store your current age into a variable.
    ● Store a maximum age into a variable.
    ● Store the amount of coffee you drink per day (as a number).
    ● Calculate how much coffee you would drink for the rest of your life.
    ● Output the result to the console like so: "You will need NN cups of coffee to last you until the ripe old age of X".
*/

let age = 20;
let maxAge = 100;
let coffeCup = 2;

let coffeCupYear = (coffeCup*365)*(maxAge - age);

console.log(`You will need ${coffeCupYear} cups of coffe to last you untile the ripe old age of ${maxAge}`);