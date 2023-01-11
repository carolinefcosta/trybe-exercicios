const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const find = books.find((elemento) => elemento.author.birthYear === 1947).author.name;

console.log(find);

// Retorne o nome do livro de menor nome.
const smallerName = () => {
  let nameBook;

  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
};

// Encontre o primeiro livro cujo nome possua 26 caracteres.
const primeiroLivroFind = books.find((book) => book.name.length === 26);

console.log(primeiroLivroFind);

// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
const verificaEvery = books.every((elemento) => elemento.author.birthYear >= 1901 && elemento.author.birthYear <= 2000);

console.log(verificaEvery);

// Faça uma função que retorne true, se algum livro tiver sido lançado na década de 80, e false, caso contrário.
const verificaSome = books.some((elemento) => elemento.releaseYear >= 1980 && elemento.releaseYear <= 1989);

console.log(verificaSome);