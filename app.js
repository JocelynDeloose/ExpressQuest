const express = require("express");
require("dotenv").config();
const mysql = require("mysql2/promise");

const app = express();
app.use(express.json());

const port = process.env.APP_PORT ?? 5000;
const { validateUser, validateMovie } = require("./services/validators")

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
app.post("/api/movies", validateMovie, movieHandlers.postMovie);
app.post('/api/users', validateUser, userHandlers.postUser);
app.put("/api/movies/:id", validateMovie, movieHandlers.putMovie);
app.put('/api/users/:id', validateUser, userHandlers.putUser);
app.delete('/api/movies/:id', movieHandlers.deleteMovieById);
app.delete('/api/users/:id', userHandlers.deleteUserById);


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    const mysql = require("mysql2/promise");
    console.log(`Server is listening on ${port}`);
  }
});

