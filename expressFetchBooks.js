// Exercise: fetch some books

// -Reuse the Node.js project from the previous exercise.
// -Copy the books API source code into a new JavaScript file and run it with node.
// -Using a browser, visit http://localhost:3000/. Confirm that the browser handles the redirect to /books automatically.
// -Open a new terminal (keep your express server running in the current one). In the terminal you just opened, fetch all the books using HTTPie: http -v :3000/books
// -Now, fetch the data for "Pride and Prejudice" through the single resource route.
//      Answer: http -v :3000/books/3
// Now, fetch the data for a book that doesn't exist. Meaning, use an id that is not in our list. This will cause the call to res.json to receive undefined as its argument.
//      Confirm that the Content-Type header is still correctly set to JSON.
//      Answer: http -v :3000/books/5
// Adjust the handler function of our third route, by replacing res.json(book) with res.send(book) and restart the server.
// Make two requests, one for an existing book, and another for an id that doesn't exist in our data.
// Confirm that in the latter case, the Content-Type header is not set correctly.
// This is because res.send will try to detect what type of response we're trying
// to send. If the argument is an object or an array, it will choose JSON.
// Since we're passing undefined (when the book doesn't exist),
// it doesn't know what the response content type should be.

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
app.get("/", (req, res) => res.redirect("/books"));
app.get("/books", (req, res) => res.json({ data: books }));
// app.get("/books/:bookId", (req, res) => {
//   //Non REST way
//   const bookId = req.params.bookId;
//   const book = books.find(b => b.id == bookId);
//   //replacing res.json(book) with res.send(book)
//   //res.json(book);
//   res.send(book);
// });
app.get("/books/:bookId", (req, res) => {
  //REST way
  const bookId = req.params.bookId;
  const book = books.find(b => b.id == bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).end(); //using HTTP status codes...
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
