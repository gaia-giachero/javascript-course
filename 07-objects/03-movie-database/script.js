/*
    ● Create an object to store the following information about a movie: title (a
        string), duration (a number), and stars (an array of strings).
    ● Create an Array of objects that can hold several movies.
    ● Create a function to print out the movie information like so: "Puff the Magic
        Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
    ● Test the function by printing one movie.
    ● Use the function to print all the movies in the Array.
*/

let films = [
  { title: "Inception", duration: 148, stars: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"] },
  { title: "The Dark Knight", duration: 152, stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"] },
  { title: "Interstellar", duration: 169, stars: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"] },
  { title: "Pulp Fiction", duration: 154, stars: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"] },
  { title: "The Matrix", duration: 136, stars: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"] },
  { title: "Gladiator", duration: 155, stars: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"] },
];

function printMovie({ title, duration, stars }){
    console.log(`${title} lasts for ${duration} minutes. 
    Stars: ${stars.join(", ")}.`)
}

for(let i=0; i<films.length; i++){
    printMovie(films[i]);
}

printMovie(films[0]);
