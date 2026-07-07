/* 
    ● Write a function called cashRegister that takes a shopping cart object.
    ● The object contains item names and prices (itemName: itemPrice).
    ● The function returns the total price of the shopping cart, e.g. :

    ● Input:
        let cartForParty = {
            banana: "1.25",
            handkerchief: ".99",
            Tshirt: "25.01",
            apple: "0.60",
            nalgene: "10.34",
            proteinShake: "22.36"
        };
    
    ● Output: 
        cashRegister(cartForParty)); // 60.55 
*/

let cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
};

// METODO 1:
function cashRegister1(cartForParty) {
  let tot = 0;
  let value = Object.values(cartForParty);

  for(let i=0; i<value.length; i++){
      tot += parseFloat(value[i]);
  }

  console.log(`Totale (metodo1): ${tot}`);
}

cashRegister1(cartForParty);

// METODO 2:
function cashRegister2(cartForParty) {
  let value = Object.values(cartForParty);

  let tot = value.reduce(function (acc, prezzo) {
    return acc + parseFloat(prezzo);
  }, 0);

  console.log(`Totale (metodo2): ${tot}`);
}

cashRegister2(cartForParty);
