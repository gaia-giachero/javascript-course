/*
    ● In JavaScript:
        ○ Change the body style so it has a font-family of "Arial, sans-serif"
        ○ Replace each of the spans (nickname, favorites, hometown) with your own information
        ○ Iterate through each li and change the class to "list-item"
        ○ Create a new img element and set its src attribute to a picture of you
        ○ Append that element to the page
    ● Add an external css file using Javascript
        ○ The external css file should make items with the .list-item class white, bold and with an orange background
        ○ The external css file should be applied after 4 seconds
*/

let body = document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";

let nickname = document.getElementById("nickname");
nickname.textContent = "gaia";

let favorites = document.getElementById("favorites");
favorites.textContent = "pizza";

let hometown = document.getElementById("hometown");
hometown.textContent = "torino";

let lista = document.querySelectorAll("li");
lista.forEach(function (el) {
  el.classList.add("list-item");
});

let img = document.createElement("img");
img.setAttribute(
  "src",
  "https://i.pinimg.com/736x/b3/07/fe/b307fe4704007cf5c4563d22c90d9a93.jpg",
);
img.id = "image";

document.body.appendChild(img);

let style = document.createElement("link");
style.rel = "stylesheet";
style.href = "style.css";

setTimeout(function () {
  document.head.appendChild(style);
}, 4000);
