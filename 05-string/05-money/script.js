/* 
    ● Create a function called money
    ● It should take a single parameter, an amount, and return '<amount> dollars'
    ● Add a smiley at the end if the amount is 1 million. Deal with edge cases
        For example:
            money(1): 1 dollar
            money(10): 10 dollars
            money(1000000): 1000000 dollars ;)
        Bonus:
            add to the function the ability to convert dollars to euros
            money(10): 10 dollars are 9.31 euros 
*/

function money(amount){
    let conversionInEuros = (amount*0.931).toFixed(2); 
    if(amount === 1000000) {
        return `${amount} dollars ;) are ${conversionInEuros} euros`;
    } else if(amount > 1){
        return `${amount} dollars are ${conversionInEuros} euros`;
    } else {
        return `${amount} dollar is ${conversionInEuros} euros`;
    }
}

console.log(money(1));
console.log(money(100));
console.log(money(1000000));