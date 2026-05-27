/* 
    ● Write a function named calculateSupply that:
        ○ takes 2 parameters: age, amount per day.
        ○ calculates the amount consumed for rest of the life (based on a constant max age).
    ● outputs the result to the screen like so: "You will need NN cups of coffee to last you until the age of X"
    ● Call that function three times, passing in different values each time
    ● Bonus:
        ○ Calculate in liters, accepting floating point values for amount per day (0.3 liters of coffee)
        ○ Round the result to a round number
*/

function calculateSupply(age, dayCups) {
  let maxAge = 100;
  let coffeCupYear = dayCups * 365 * (maxAge - age);
  let coffeLiterYear = Math.round(coffeCupYear*0.24);
  return console.log(
    `You will need ${coffeCupYear} cups (in liters ${coffeLiterYear}) of coffe to last you untile the ripe old age of ${maxAge}`,
  );
}

calculateSupply(20, 2);
calculateSupply(30, 5);
calculateSupply(20, 4);