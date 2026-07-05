/*
    ● Write a function named helloWorld that:
        ○ takes 1 parameter, a language code (e.g. "es", "de", "en")
        ○ returns "Hello, World" for the given language, for at least 3 languages. 
            It should default to returning English.
    ● Call that function for each of the supported languages and log the result to make sure it works. 
*/

function helloWorld(language){
    switch(language){
        case 'en':
            return "Hello, World!";
        case 'de':
            return "Hallo, Welt!";
        case 'es':
            return "¡Hola, Mundo!";
        case 'fr':
            return "Bonjour, le Monde!";
        case 'it':
            return "Ciao, Mondo!";
        default:
            return "Hello, World!";
    }    
}

console.log(helloWorld('en'));
console.log(helloWorld('de'));
console.log(helloWorld('es'));
console.log(helloWorld('fr'));
console.log(helloWorld('it'));
console.log(helloWorld('ch'));