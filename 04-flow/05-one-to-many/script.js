/* 
    ● Write a function named oneToMany() that:
        ○ takes 2 parameters, a noun and a number.
        ○ returns the number and pluralized form, like "5 cats" or "1 dog".
    ● Call that function for a few different scores and log the result to make sure it works.
    ● Bonus: Make it handle a few collective nouns like "sheep" and "geese". 
*/

function oneToMany(number, name){
    if(name === 'sheep'){
        return number + " " + name;
    }

    if(number > 1){
        if(name === 'goose'){
            return number + " geese";
        }
        return number + " " + name + "s";
    } else {
        return number + " " + name;
    }
}

console.log(oneToMany(5, 'cat'));
console.log(oneToMany(1, 'dog'));
console.log(oneToMany(5, 'sheep'));
console.log(oneToMany(1, 'sheep'));
console.log(oneToMany(5, 'goose'));
console.log(oneToMany(1, 'goose'));