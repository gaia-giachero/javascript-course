/* 
    ● Create an array of objects, where each object describes a book and has
        properties for the title (a string), author (a string), and alreadyRead (a
        boolean indicating if you read it yet).
    ● Iterate through the array of books. For each book, log the book title and
        book author like so: "The Hobbit by J.R.R. Tolkien".
    ● Now use an if/else statement to change the output depending on whether
        you read it yet or not. If you read it, log a string like 'You already read "The
        Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read
        "The Lord of the Rings" by J.R.R. Tolkien.'
*/

let books = [
  { title: "Il nome della rosa", author: "Umberto Eco", alreadyRead: true },
  { title: "1984", author: "George Orwell", alreadyRead: true },
  { title: "La strada", author: "Cormac McCarthy", alreadyRead: false },
  { title: "Harry Potter e la pietra filosofale", author: "J.K. Rowling", alreadyRead: true },
  { title: "Il grande Gatsby", author: "F. Scott Fitzgerald", alreadyRead: false },
];

for(let i=0; i<books.length; i++){
    if(books[i].alreadyRead === true){
        console.log(`You already read "${books[i].title}" by ${books[i].author}`)
    } else {
        console.log(`You still need to read "${books[i].title}" by ${books[i].author}`)
    }
}