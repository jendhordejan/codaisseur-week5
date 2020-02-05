const express = require("express");
const app = express();
const port = 3000;

//middleware for logging-in
const loggingMiddleware = (req, res, next) => {
  // 1. this middleware should log the current time to the console.
  // 2. this middleware should also send a custom header (using res.setHeader(name, value)) to the client.
  //        The header name should be X-Codaisseur-Time, and its value should be the same
  //        timestamp that was logged to the console.
  // 3. Add this middleware at the application level.
  const time = new Date().toString();
  console.log("request received at " + time); //1.
  res.setHeader("X-Codaisseur-Time", time); //2
  // Continue on to the next middleware or handler
  next();
};

const failRandomlyMiddleware = (req, res, next) => {
  // make a middleware function called failRandomlyMiddleware.
  // 1. Make it so that 50% of the time (using Math.random) the middleware simply calls next() and
  // 2. the other 50% of the time it will end the request with a 500 status code (and no content).
  // 3. Add this middleware at the route level.
  // Test your middleware by making several requests. Half the time you should get a 200 response with the "Hello" message.
  if (Math.random() < 0.5) {
    res.status(500).end(); //2
  } else {
    next(); // 1
  }
};

app.use(loggingMiddleware); //3. Middleware at the application level will be called for each request

app.get("/", failRandomlyMiddleware, (req, res) => res.send("Hello")); // 3. dd this middleware at the route level.
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
