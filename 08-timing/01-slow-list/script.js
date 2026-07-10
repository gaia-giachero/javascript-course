/* 
    ● Create an array that holds a list of 30 items (food, books, etc.)
    ● Print one item of the list every second until the list is completely printed
        ○ Use setInterval to achieve this goal
        ○ Do the same thing using setTimeout 
*/

const cibi = [
  'pizza', 'pasta', 'lasagna', 'risotto', 'gnocchi',
  'tiramisù', 'gelato', 'panino', 'focaccia', 'bruschetta',
  'mozzarella', 'prosciutto', 'salame', 'parmigiano', 'gorgonzola',
  'insalata', 'pollo', 'manzo', 'pesce', 'salmone',
  'tonno', 'uova', 'pane', 'riso', 'patate',
  'zucchine', 'melanzane', 'pomodori', 'carote', 'cipolle'
]

/* 
let i=0;
const cibiStampati = setInterval(function() {
    console.log(`${i+1}: ${cibi[i]}`);
    i++;

    if(i >= cibi.length){
        clearInterval(cibiStampati);
        console.log(`Non ci sono più cibi da stampare a schermo`)
    }
}, 1000)
*/

let j = 0;
function stampaLenta(){
    console.log(`${j+1}: ${cibi[j]}`)
    j++;
    
    if(j < cibi.length){
        setTimeout(function() {
            stampaLenta();
        }, 1000)
    } else {
        console.log(`Non ci sono più cibi da stampare a schermo`)
    }
}

stampaLenta();