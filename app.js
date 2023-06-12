const express = require("express");
require("dotenv").config();
const mysql = require("mysql2/promise");

const app = express();
app.use(express.json());

const port = process.env.APP_PORT ?? 5000;


const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const movieHandlers = require("./movieHandlers");
const userHandlers = require("./userHandlers");

app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);
app.get("/api/users", userHandlers.getUser);
app.get("/api/users/:id", userHandlers.getUserById);
app.post("/api/movies", movieHandlers.postMovie);
app.post('/api/users', userHandlers.postUser);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    const mysql = require("mysql2/promise");
    console.log(`Server is listening on ${port}`);
  }
});

