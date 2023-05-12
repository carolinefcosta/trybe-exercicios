const existingId = (req, res, next) => {
  const { id } = Number(req.params);
  const team = teams.some((team) => team.id === id);
  if (team) {
    next();
  } else {
    res.sendStatus(404);
  } 
}

module.exports = existingId;