/*
    ● Create a function called fixStart
    ● It should take a single parameter, a string, and return a version where all occurrences of its
        first character have been replaced with '*', except for the first character itself
    ● You can assume that the string is at least one character long
        For example
            fixStart('babble'): 'ba**le' 
*/

function fixStart(string){
    let firstChar = string.at(0);
    let restString = string.slice(1);
    
    let newString = restString.replaceAll(firstChar, '*');

    return `${firstChar}${newString}`;
}

console.log(fixStart('babbel'));
console.log(fixStart('cerchio'));
console.log(fixStart('elefante'));