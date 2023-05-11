const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await readFile();
    if (q) {
      const filterMovies = movies.filter((element) => element.movie.includes(q));
      return res.status(200).json(filterMovies);
    }

    res.status(200).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
})

app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const leituraJSON = async () => {
  try {
    const data = await fs.readFile(moviesPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
}

leituraJSON();

app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const movie = movies.find(({ id }) => id === Number(req.params.id));

    res.status(200).json(movie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
})

app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();

    res.status(200).json(movies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
})

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);

    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
})

app.post('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFile();
    const movieIndex = movies.find((element) => element.id === Number(id));
    movies[movieIndex] = { id: Number(id), movie, price };
    const updatedMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);

    res.status(201).json(movies[movieIndex]);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
})

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const filterMovies = movies((movie) => movie.id !== Number(id));
    const updatedMovies = JSON.stringify(filterMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);

    res.status(204).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }

})

module.exports = app;
