/*
    You will be implementing a game similar to hangman: Hangman (game) PlayHangman.com - Play Hangman Game
        ● Create two arrays:
            ○ one for the letters of the word (e.g. 'C', 'A', 'T')
            ○ Another for the current guessed letters (start with '_', '_', '_' and add the correct letters to it).
        ● Write a function called guessLetter that should:
            ○ Take one parameter, a letter.
            ○ Have a maximum number of guesses (e.g. 6)
            ○ Check if the letter is in the word array.
            ○ If the letter matches, add it in the correct position of the guessed array.
            ○ Show the user the current guessed letters.
            ○ Tell the user if they guessed a correct letter.
            ○ Tell the user how many guesses remain.
            ○ Tell the user if they won or lost the game.

    Call your function to make guesses:
        ● guessLetter('G');
        ● guessLetter('I');
        ● guessLetter('O');
        ● guessLetter('A');
        ● guessLetter('T');

    ● Bonus
        ○ Add a random reward for correct guesses and subtract a random amount for failed guesses.
        ○ Show the user the total reward (positive or negative).
        ○ Draw a hangman image to the console log after each guess.
        ○ Add a function that generates the letters to guess randomly.
        ○ Add a function that chooses the initial word to guess from an array of words. 
*/

const parolaDaIndovinare = ["G", "E", "O", "P", "O", "P"];
const lettereIndovinate = ["_", "_", "_", "_", "_", "_"];

const tentativiMax = 6;
let tentativiRimasti = tentativiMax;

console.log(`INDOVINA LA PAROLA ${lettereIndovinate.join(" ")}. Attenzione ai tentativi di errore: ${tentativiMax}`);

// 1. prendere la lettera
function guessLetter(letter) {
  if (lettereIndovinate.includes("_")) {
    let letteraIndovinata = false;
    // questo blocco finché la parola non è completa e/o i tentativi non sono finiti:
    for (let i = 0; i < parolaDaIndovinare.length; i++) {
      // 2. cercare se la lettera è nell'array
      if (letter.toUpperCase() === parolaDaIndovinare[i]) {
        // 3. se c'è -> mettere la lettera nella posizione esatta e dare output all'utente
        lettereIndovinate[i] = letter.toUpperCase();
        console.log(
          `La lettera ${letter.toUpperCase()} è presente nella parola da indovinare ${lettereIndovinate.join(" ")}. Tentativi rimasti: ${tentativiRimasti}.`,
        );
        letteraIndovinata = true;
      }
    }
    if (letteraIndovinata === false) {
      // 6. se parola non indovinata e tentativi finiti -> output all'utente con soluzione parola
      if (tentativiRimasti >= 1) {
        // 4. se non c'è -> togliere un tentativo e dare output all'utente
        tentativiRimasti--;
        console.log(`La lettera ${letter.toUpperCase()} non è presente nella parola da indovinare. 
Riprova ma attenzione ti rimangono ${tentativiRimasti} tentativi.`);
      }

    }
    if (tentativiRimasti === 0) {
      console.log(
        `Hai finito i tentativi, mi dispiace. La parola da indovinare era: ${parolaDaIndovinare.join("")}`,
      );
    }

    if (!lettereIndovinate.includes("_")) {
      // 5. se parola indovinata interamente -> output all'utente
      console.log(
        `Hai indovinato la parola "${lettereIndovinate.join("")}". Ottimo lavoro!`,
      );
    }
  }
}

guessLetter("A");
guessLetter("E");
guessLetter("I");
guessLetter("O");
guessLetter("P");
guessLetter("G");