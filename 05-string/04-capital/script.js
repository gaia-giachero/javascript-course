/*
    ● Write a JavaScript function called capital which has one parameter, a string, and which returns
        that string with the first letter capitalized
    ● For example, the call capital("hello world") should return the string "Hello world" 
*/

function capital(string){
    let capitalize = string.at(0)
    let word = capitalize.toUpperCase() + string.slice(1);
    return word;
}

console.log(capital('ciao'));
console.log(capital('ciao mondo'));