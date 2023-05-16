const teams = require('../data/teams');

const existingId = (req, res, next) => {
  const { id } = Number(req.params);
  const team = teams.some((team) => team.id === id);
  if (!team) {
    return res.status(404).json({ message: 'Time não encontrado' });
  } else {
    next();
  } 
}

module.exports = existingId;