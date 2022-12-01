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

// 🚀 1 - Filtre todos os objetos do gênero ficção científica ou fantasia.
const filterGenero = books.filter((livro) => livro.genre === 'Fantasia' || livro.genre === 'Ficção Científica');

// console.log(filterGenero);

// 🚀 2 - Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.
const filterAndSort = books.filter((livro) => (2022 - livro.releaseYear) > 60).sort((livro1, livro2) => livro1.releaseYear - livro2.releaseYear);

// console.log(filterAndSort);

// 🚀 3 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.
const arrayFiccaoFantasia = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((nome) => nome.author.name).sort();

// console.log(arrayFiccaoFantasia);

// 🚀 4 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const arrayNomeLivros60Anos = books.filter((book) => (2022 - book.releaseYear > 60)).map((nome) => nome.author.name);

// console.log(arrayNomeLivros60Anos);

// 🚀 5 - Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.