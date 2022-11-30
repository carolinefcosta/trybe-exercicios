const infoFuncionarios = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().replace(' ', '_');

  return {nomeCompleto, email:`${email}@trybe.com`};
};
// console.log(infoFuncionarios('Caroline Fernandes'));

const newEmployees = (nomeFuncionario) => {
  const employees = {
    id1: nomeFuncionario('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nomeFuncionario('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nomeFuncionario('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(infoFuncionarios));