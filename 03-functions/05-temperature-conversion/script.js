/*
    ● Create a function called celsiusToFahrenheit:
        ○ Store a celsius temperature into a variable.
        ○ Convert it to fahrenheit and output "NN°C is NN°F".
    ● Create a function called fahrenheitToCelsius:
        ○ Now store a fahrenheit temperature into a variable.
        ○ Convert it to celsius and output "NN°F is NN°C." 
*/

function celsiusToFahrenheit(tempC){
    const CtoF = tempC * (9/5) + 32;
    console.log(`${tempC}°C is ${CtoF}°F`);     
}

function fahrenheitToCelsius(tempF){
    const FtoC = (tempF - 32) * (5/9);
    console.log(`${tempF}°F is ${FtoC}°C`);
}

celsiusToFahrenheit(0);
fahrenheitToCelsius(32);