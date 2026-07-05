/* 
    ● Write a function named assignGrade that:
        ○ takes 1 parameter, a number score.
        ○ returns a grade for the score, either "A", "B", "C", "D", or "F".
    ● Call that function for a few different scores and log the result to make sure it works. 
*/

/* function assignGrade(score){
    if(score >= 90){
        return "A";
    } else if (score >= 80 && score <= 89){
        return "B";
    } else if (score >= 70 && score <= 79){
        return "C";
    } else if (score >= 60 && score <= 69){
        return "D";
    } else if (score < 60){
        return "F";
    } 
} */

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

console.log(assignGrade(90));
console.log(assignGrade(80));
console.log(assignGrade(70));
console.log(assignGrade(60));
console.log(assignGrade(95));
console.log(assignGrade(85));
console.log(assignGrade(75));
console.log(assignGrade(65));
console.log(assignGrade(55));
