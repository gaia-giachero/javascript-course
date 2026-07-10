/*
    ● Write a function “useful” that does something useful in Javascript
    ● Schedule it to run after 10 seconds
    ● Write another function that cancels the scheduling of the first function
    ● Use the second function to cancel the first one after 5 seconds and output ‘function cancelled’ to the console 
*/

function useful(){
    console.log(`Che bella giornata :)`);
}

const stampa = setTimeout(useful, 10000);

function cancelTimeout(){
    clearTimeout(stampa);
    console.log(`Funzione cancellata`);
}

const cancel = setTimeout(cancelTimeout, 5000);