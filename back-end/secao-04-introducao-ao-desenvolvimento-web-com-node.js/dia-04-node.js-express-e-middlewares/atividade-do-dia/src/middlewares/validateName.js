const validationName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'O campo name é obrigatório' });
  }
  if (name.length < 4) {
     return res.status(400).json({ message: 'O campo name precisa ter no mínimo 4 caracteres' });
  } 
    next();
};

module.exports = validationName;