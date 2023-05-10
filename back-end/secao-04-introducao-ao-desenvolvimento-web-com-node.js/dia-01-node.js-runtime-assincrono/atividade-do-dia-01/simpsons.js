const fs = require('fs').promises;

const imprimindoIdNome = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  simpsons.map(({ id, name }) => {
    console.log(`${id} - ${name}`);
  })
}

const getBySimpsonId = async (id) => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const result = simpsons.find(simpson => Number(simpson.id) === id);
  if (!result) {
    console.log('id não encontrado');
  }
  return result;
}

const filterSimpsons = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const result = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== 6);
  await fs.writeFile('./simpsons.json', JSON.stringify(result));
}

const createSimpsonsFamily = async () => {
  const simpsonsFamilyIds = [1, 2, 3, 4]
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const simpsonsFamily = simpsons.filter((simpson) => simpsonsFamilyIds.includes(Number(simpson.id)));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

const addNelsonFamily = async () => {
  const data = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const result = JSON.parse(data);
  result.push({id:"8", name:"Nelson Muntz"})
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(result));
}

const addMaggieFamily = async () => {
  const data = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const result = JSON.parse(data);
  const simpsons = result.filter(simpson => simpson.id !== '8')
  simpsons.push({id:"8", name:"Maggie Simpson"})
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons));
}

const main = () => {
  imprimindoIdNome();
  getBySimpsonId(35)
    .then((element) => console.log(element));
  filterSimpsons();
  createSimpsonsFamily();
  addNelsonFamily();
  addMaggieFamily();
}

main();