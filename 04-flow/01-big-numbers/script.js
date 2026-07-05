/*
    ● Write a function named greaterNum that:
        ○ takes 2 parameters, both numbers.
        ○ returns whichever number is the greater (higher) number.
    ● Call that function 2 times with different number pairs, and log the output to make
        sure it works (e.g. "The greater number of 5 and 10 is 10."). 
*/

function greaterNum(num1, num2) {
  let higerNum;
  if (num1 > num2) {
    higerNum = num1;
  } else if (num2 > num1) {
    higerNum = num2;
  } else {
    console.log(`The number ${num1} e ${num2} is equal.`);
    return num1;
  }
  console.log(`The greater number of ${num1} and ${num2} is ${higerNum}.`);
  return higerNum;
}

greaterNum(2, 5);
greaterNum(20, 5);
greaterNum(10, 10);
