/* 
    ● Create an object to hold information on your favorite recipe. It should have
        properties for title (a string), servings (a number), and ingredients (an array of strings).
    ● On separate lines (one console.log statement for each), log the recipe information
    
    ● Bonus: Create an array that holds several recipes and log them all 
*/

let ricetta = {
  title: "pizza",
  servings: "5 people",
  ingredients: [
    "farina",
    "acqua",
    "lievito",
    "olio",
    "sale",
    "passata di pomodoro",
    "mozzarella",
    "foglia di basilico",
  ],
};

console.log(ricetta.title);
console.log(ricetta.servings);
console.log(ricetta.ingredients);

let ricette = [
  {
    title: "pizza",
    servings: "5 people",
    ingredients: [
      "farina",
      "acqua",
      "lievito",
      "olio",
      "sale",
      "passata di pomodoro",
      "mozzarella",
      "foglia di basilico",
    ],
  },

  {
    title: "pasta alla carbonara",
    servings: "4 people",
    ingredients: [
      "spaghetti",
      "uova",
      "guanciale",
      "pecorino romano",
      "pepe nero",
      "sale",
    ],
  },

  {
    title: "tiramisù",
    servings: "6 people",
    ingredients: [
      "savoiardi",
      "caffè",
      "mascarpone",
      "uova",
      "zucchero",
      "cacao amaro",
    ],
  },
];

for(let i = 0; i<ricette.length; i++){
    console.log(`Titolo: ${ricette[i].title}`);
    console.log(`Persone: ${ricette[i].servings}`);
    console.log(`Ingredienti: ${ricette[i].ingredients}`);
}
