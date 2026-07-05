/*
    Write a function called merger() that takes two parameters and performs the following operation:
        ● If both parameters are numbers, return the sum
        ● If both parameters are strings, return the concatenation of the strings
        ● If the parameters are anything else, return null
*/

function merger(param1, param2){
    if(typeof param1 === 'number' && typeof param2 === 'number'){
        const sum = param1 + param2;
        console.log(`La somma di ${param1} e ${param2} è: ${sum}`);
        return sum;
    } else if(typeof param1 === 'string' && typeof param2 === 'string'){
        const concatenation = param1 + " " + param2
        console.log(`Concatenazione: ${concatenation}`);
        return concatenation;
    } else {
        console.log(null);
        return null;
    }
}

merger(2, 5);
merger('ciao', 'mondo');
merger(true, false);