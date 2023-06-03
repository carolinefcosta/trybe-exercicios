const { book } = require('../models');

const getAll = async () => {
  const books = await book.findAll();
  return books;
};

const getById = async (id) => {
  const books = await book.findByPk(id);
  return books;
};

const create = async ({ title, author, pageQuantity }) => {
  const books = await book.create({ title, author, pageQuantity });
  return books;
};

const update = async (id, { title, author, pageQuantity }) => {
  const [updated] = await book.update(
    {
      title,
      author,
      pageQuantity,
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

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};