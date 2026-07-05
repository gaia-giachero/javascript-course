/*
    ● Write a JavaScript function called reverse which has one parameter, 
        a string, and which returns that string in reverse
    ● For example, the call reverse("foobar") should return the string "raboof" 
*/

function reverse(string){
    let stringReverse = "";
    for(let i = string.length; i >= 0; i--){
        let lettera = string[i];
        stringReverse += lettera;
    }
    return stringReverse;
}

console.log(reverse('pineta'));
console.log(reverse('estrattore'));
console.log(reverse('sgombro'));