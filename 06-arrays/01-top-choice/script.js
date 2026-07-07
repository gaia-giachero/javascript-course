/* 
    Create an array to hold your top choices (colors, pets, books, whatever).
    For each choice, log to the screen a string like: "My #1 choice is blue."

    Bonus: Change it to add the correct number suffix, e.g. "My 1st choice, "My 2nd
    choice", "My 3rd choice", "My 4th choice", etc.
*/

const topChoices = ["blue", "dog", "music", "pizza"];

for(let i = 0; i<topChoices.length; i++){
    let suffix = "";
    switch (i){
        case 0:
            suffix = "st";
            break; 
        case 1:
            suffix = "nd";
            break; 
        case 2:
            suffix = "rd";
            break; 
        default:
            suffix = "th";
        }
    console.log(`My ${i+1}${suffix} choice is ${topChoices[i]}`); 
}