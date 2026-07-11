/*
    ● Add an event listener to the button so that it calls a 
        makeStory function when clicked.
    ● In the makeStory function, retrieve the current values of the form input
        elements, make a story from them, and output that in the story div (like
        "Joseph really likes pink cucumbers.") 
*/

let button = document.getElementById('gen-button');

function makeStory(){
    let story = document.getElementById('story');

    let noun = document.getElementById('noun').value;
    let adjective = document.getElementById('adjective').value;
    let person = document.getElementById('person').value;

    story.textContent = `${person} really likes ${adjective} ${noun}.`;
}

button.addEventListener('click', makeStory);