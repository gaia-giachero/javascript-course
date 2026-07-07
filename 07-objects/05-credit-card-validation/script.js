/*
    ● Write a function called “validateCreditCard” that checks credit card
        numbers according to the following rules:
            ○ Number must be 16 digits, all of them must be numbers
            ○ You must have at least two different digits represented (all of the digits cannot be the same)
            ○ The final digit must be even
            ○ The sum of all the digits must be greater than 16

    ● Call the function with several credit card numbers:
        validateCreditCard('9999-9999-8888-0000');
        validateCreditCard('4444-4444-4444-4444');
        validateCreditCard('6666-6666-6666-1666');
        
        ● The function returns an object saying that the credit card is valid, or what the error is:
        { valid: true, number: '9999-9999-8888-0000' }
        { valid: false, number: 'a923-3211-9c01-1112', error: 'wrong_length' }
    
    ● For each card check, print out the result to the log in this format:
        ================================
        = number : a923-3211-9c01-1112 =
        = valid : false                =
        = error : wrong length         =
        ================================
        */

function validateCreditCard(creditCard) {
  let newCreditCard = creditCard.replaceAll("-", "");
  let controlloCifre = new Set(newCreditCard);
  
  let result = {
    valid: true,
    number: creditCard,
  };

  // newCreditCard.length !== 16
  if (newCreditCard.length !== 16) {
    result.valid = false;
    result.error = "wrong_length";
  }

  // Number(newCreditCard) === NaN
  // if (Number(newCreditCard) === NaN) -> NaN non è mai uguale a se stesso quindi il risultato sarebbe sempre 'false'
  else if (isNaN(Number(newCreditCard))) {
    result.valid = false;
    result.error = "not_a_number";
  }

  // controlloCifre.size === 1
  else if (controlloCifre.size === 1) {
    result.valid = false;
    result.error = "all_digits_the_same";
  }

  // (newCreditCard.at(-1) % 2)
  else if (newCreditCard.at(-1) % 2) {
    result.valid = false;
    result.error = "last_digit_odd";
  } else {
    let arrayCreditCard = newCreditCard.split("");

    let tot = arrayCreditCard.reduce(function (acc, cifre) {
      return acc + parseInt(cifre);
    }, 0);

    // tot < 16
    if (tot <= 16) {
      result.valid = false;
      result.error = "sum_less_than_16";
    }
  }

  console.log("================================");
  console.log(`= number : ${result.number} =`);
  console.log(`= valid  : ${result.valid}                =`);
  if (!result.valid) {
    console.log(`= error  : ${result.error}         =`);
  }
  console.log("================================");

  return result;
}

validateCreditCard("9999-9999-8888-0000");
validateCreditCard("4444-4444-4444-4444");
validateCreditCard("6666-6666-6666-1666");
