/* 
    Write a function that will take one parameter (a number) and perform the following operations, 
    using the functions you wrote earlier:
        ● Take half of the number and store the result
        ● Square the result of #1 and store that result
        ● Calculate the area of a circle with the result of #2 as the radius
        ● Calculate what percentage that area is of the squared result (#3) 
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
    return Number(area.toFixed(2));
}

function calculator(number){
    const half = halfNumber(number);
    const square = squareNumber(half);
    const area = areaOfCircle(square);
    const percent = percentOf(area, square);
    return percent;
}

calculator(10);