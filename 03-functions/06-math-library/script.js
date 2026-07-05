/* 
    ● Write a function called squareNumber that will take one parameter (a number), 
        square that number, and return the result. 
        It should also log a string like "The result of squaring the number 3 is 9."

    ● Write a function called halfNumber that will take one parameter (a number), 
        divide it by 2, and return the result. It should also log a string like
        "Half of 5 is 2.5." 

    ● Write a function called percentOf that will take two numbers, figure out
        what percent the first number represents of the second number, and return
        the result. It should also log a string like "2 is 50% of 4."

    ● Write a function called areaOfCircle that will take one parameter (the
        radius), calculate the area based on that, and return the result. It should also
        log a string like "The area for a circle with radius 2 is 12.566370614359172."

    ● Bonus: round the result so there are only two digits after the decimal 
*/

function squareNumber(number){
    const square = number ** 2;
    console.log(`The result of squaring the number ${number} is ${square}`);
    return square;
}

function halfNumber(number){
    const half = number/2;
    console.log(`Half of ${number} is ${half}`)
    return half;
}

function percentOf(n1, n2){
    const percent = (n1/n2)*100;
    console.log(`${n1} is ${percent}% of ${n2}`);
    return percent;
}

function areaOfCircle(radius){
    const area = Math.PI * (radius ** 2);
    console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}`);
    return area.toFixed(2);
}

squareNumber(2);
halfNumber(4);
percentOf(2, 4);
areaOfCircle(2);