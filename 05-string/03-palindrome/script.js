/*
    ● Using your reverse() function from the previous exercise, write a simple function 
        to check if a string is a palindrome
    ● A palindrome is a word that reads the same backwards as forwards. 
        For example, the word "madam" is a palindrome
    ● Write a JavaScript function called isPalindrome which has one parameter, a string, 
        and which returns true if that string is a palindrome, else false
    ● For example, the call isPalindrome("madam") should return true, while isPalindrome("madame") 
        should return false 
*/

function reverse(string){
    let stringReverse = "";
    for(let i = string.length -1; i >= 0; i--){
        let lettera = string[i];
        stringReverse += lettera;
    }
    return stringReverse;
}

function isPalindrome(parola){
    if (parola === reverse(parola)){
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('ciao'));
console.log(isPalindrome('esse'));
console.log(isPalindrome('anna'));
console.log(isPalindrome('radar'));
console.log(isPalindrome('ingegni'));