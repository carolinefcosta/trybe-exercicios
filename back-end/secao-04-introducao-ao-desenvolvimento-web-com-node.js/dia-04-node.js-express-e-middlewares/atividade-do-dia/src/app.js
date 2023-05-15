const express = require('express');
const validationName = require('./middlewares/validateName');
const validationPrice = require('./middlewares/validatePrice');
const validationDescription = require('./middlewares/validateDescription');
const validationCreatedAt = require('./middlewares/validateCreatedAt');
const validationRating = require('./middlewares/validateRating');
const validationDifficulty = require('./middlewares/validateDifficulty');
const generateToken = require('./utils/generateToken');
const auth = require('./middlewares/auth');

const app = express();

app.use(express.json());

app.post('/activities',
validationName,
validationPrice,
validationDescription,
validationCreatedAt,
validationRating,
validationDifficulty,
auth,
(_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = app;
