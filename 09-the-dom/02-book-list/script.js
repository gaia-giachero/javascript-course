/* 
    ● Create a complete webpage with a title, description and all other HTML tags
    ● In the body add an h1 title of "My Book List"
    ● In javascript, iterate through the array of books.
        ○ For each book, create HTML element with the book title and author and append it to the page
        ○ Use a ul and li to display the books
        ○ Add a url property to each book object that contains the cover image of the book
        ○ Add the image to the HTML using Javascript
        ○ Using javascript change the style of the book depending on whether you have read it or not
    ● Add an external css file that applies after 5 seconds
        ○ Now change the style of the book depending on whether you have read it or not using both
            css and javascript (the CSS should use a different color for read books) 
*/

let books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    imgUrl: 'https://covers.openlibrary.org/b/id/8225261-L.jpg'
  }, 
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    imgUrl: 'https://covers.openlibrary.org/b/id/6979861-L.jpg'
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    alreadyRead: true,
    imgUrl: 'https://covers.openlibrary.org/b/id/9641656-L.jpg'
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    alreadyRead: false,
    imgUrl: 'https://covers.openlibrary.org/b/id/11153217-L.jpg'
  }
];

let listaLibri = document.createElement('ul');

books.map(function(book){
    let li = document.createElement('li');
    let img = document.createElement('img');
    let h3 = document.createElement('h3');
    let h5 = document.createElement('h5');
    img.src = book.imgUrl
    h3.textContent = book.title
    h5.textContent = book.author;
    li.append(img, h3, h5);
    listaLibri.appendChild(li);

    li.style.padding = '1em';
    li.style.margin = '0.5em';
    li.style.listStyle = 'none';
    li.style.textAlign = 'center';
    
    if(book.alreadyRead){
        li.style.backgroundColor = 'grey';
        li.classList.add('libro-letto');
    } else {
        li.style.backgroundColor = 'lightgrey';
        li.classList.add('libro-non-letto');
    }
});

document.body.appendChild(listaLibri);

let style = document.createElement("link");
style.rel = "stylesheet";
style.href = "style.css";

setTimeout(function () {
  document.head.appendChild(style);
}, 5000);