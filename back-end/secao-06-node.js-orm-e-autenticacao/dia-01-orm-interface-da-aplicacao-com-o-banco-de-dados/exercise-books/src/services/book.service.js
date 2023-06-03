const { book } = require('../models');

const getAll = async () => {
  const books = await book.findAll({
    order: [['title', 'ASC']],
  });
  return books;
};

const getById = async (id) => {
  const books = await book.findByPk(id);
  return books;
};

const create = async ({ title, author, pageQuantity, publisher }) => {
  const books = await book.create({ title, author, pageQuantity, publisher });
  return books;
};

const update = async (id, { title, author, pageQuantity, publisher }) => {
  const [updated] = await book.update(
    {
      title,
      author,
      pageQuantity,
      publisher,
    },
    { where: { id } },
  );

  return updated;
};

const remove = async (id) => {
  const removed = await book.destroy(
    { where: { id } },
  );

  return removed;
};

const getByAuthor = async (author) => {
  const books = await book.findAll({
    where: { author },
    order: [['title', 'ASC']],
  });
  return books;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
};