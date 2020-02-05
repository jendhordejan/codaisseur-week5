//Introducing Express..

const express = require("express"); // requires 'npm init' and 'npm install express' at terminal
const app = express(); //creating an instance of
const port = 3000; //defining your port
app
  .get("/", (request, response) => response.send("Hello World!")) //displays when you run in browser 'http://localhost:3000/'
  .get(
    "/test",
    (request, response) =>
      response.send("<h1>Hello World using html h1 tag<h1>") //run in browser 'http://localhost:3000/test'
  )
  .get("/gif", (request, response) =>
    response.send(
      `<img src="http://www-it.fmi.uni-sofia.bg/courses/maten/module1/image1.gif"/>` //run http://localhost:3000/gif
    )
  )
  .listen(port, () => console.log(`Example app listening on port ${port}!`)); //output when run in node 'node index.js'
