const express = require("express");
const app = express();
const port = 3000;
const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  {
    id: 2,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling"
  },
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 4, title: "The Diary of a Young Girl", author: "Anne Frank" }
];

//Routing
app.get("/", (req, res) => res.redirect("/books")); //ROUTE 1 (default "/"): redirecting from "http://localhost:3000/" to a different route "http://localhost:3000/books"
app.get("/books", (req, res) => res.json({ data: books })); //ROUTE ("/books"): display data in Json format
app.get("/books/:bookId", (req, res) => {
  //ROUTING by PK: display books by looking for its id. run "http://localhost:3000/books/2"
  const bookId = req.params.bookId; //assigning the book id to variable bookId
  const book = books.find(b => b.id == bookId); //searching throught the data the book id
  res.json(book); // displaying the result of the search
});
// app.get("books/:bookId", (req, res) => {
//   const bookAuthor = req.param.author;
//   const book = books.find(b => {
//     b.author == bookAuthor;
//     console.log("book author id", b.id);
//     return b.id;
//   });
//   res.json(book);
// });
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
