// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Maçã', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Farinha Lactea', 'Banana'];

const fruitSalad = (fruit, additional) => {
  const nossaSalada = [...fruit, ...additional];
  return nossaSalada;
};

// console.log(fruitSalad(specialFruit, additionalItens));

// Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userJob = {...user, ...jobInfos};

// console.log(userJob);

const { name, age, nationality } = user;
const { profession, squad, squadInitials } = jobInfos;

// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);