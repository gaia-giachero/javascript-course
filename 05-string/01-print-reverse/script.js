/*
    ● Write a JavaScript function called printReverse which has one parameter, 
        a string, and which prints that string in reverse
    ● For example, the call printReverse("foobar") should result in "raboof" being displayed 
*/

function printReverse(string){
    let reverse = "";
    for(let i = string.length -1; i >= 0; i--){
        let lettera = string[i];
        reverse += lettera;
    }
    return reverse;
}

console.log(printReverse('ciao'));
console.log(printReverse('ape'));
console.log(printReverse('enoteca'));
console.log(printReverse('calendario'));