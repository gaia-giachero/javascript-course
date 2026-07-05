/*
    ● Write a loop that tests the function that you wrote earlier “assignGrade”.
    ● Check every value from 60 to 100:
        ○ your log should show
            ■ “For 88, you got a B.”
            ■ “For 89, you got a B.”
            ■ “For 90, you got an A.”
            ■ etc. 
*/

function assignGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

for(let i=60; i<=100; i++){
    console.log(`For ${i}, you got a ${assignGrade(i)}`);
}