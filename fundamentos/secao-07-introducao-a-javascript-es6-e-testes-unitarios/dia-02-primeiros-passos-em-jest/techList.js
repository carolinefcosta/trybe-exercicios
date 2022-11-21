const techList = (arrayTechnologies, name) => {
  if (arrayTechnologies.length === 0) return 'Vazio!';

  const sortedArray = arrayTechnologies.sort();
  const technologyList = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
    technologyList.push({
      tech: sortedArray[index],
      name,
    });
  }
  return technologyList;
};

const somatoria = (numeros) => {
  let somando = 0;

  for(let index = 1; index <= numeros; index += 1) {
    somando += index;
  };
  return somando;
};

module.exports = {techList, somatoria};