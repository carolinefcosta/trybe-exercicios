const { swap, myList, toObject, palio, shelbyCobra, chiron, greet, student1, student2, getLastName } = require('./atividade2');

describe('Verificando função swap', () => {
  test('O tipo é função', () => {
    expect(typeof swap).toBe('function');
  })
  test('O retorno está correto', () => {
    expect(swap(myList)).toEqual([3, 2, 5]);
  })
});
describe('Verificando função toObject', () => {
  test('O tipo é função', () => {
    expect(typeof toObject).toBe('function');
  })
  test('O retorno está correto', () => {
    expect(toObject(palio)).toEqual({ name: 'Palio', brand: 'Fiat', year: 2019 });
    expect(toObject(shelbyCobra)).toEqual({ name: 'Shelby Cobra', brand: 'Ford', year: 1963 });
    expect(toObject(chiron)).toEqual({ name: 'Chiron', brand: 'Bugatti', year: 2016 });
  })
});
describe('Verificando função greet', () => {
  test('O tipo é função', () => {
    expect(typeof greet).toBe('function');
  })
  test('O retorno está correto', () => {
    expect(greet('Carol', 'Bom dia')).toEqual('Bom dia Carol');
    expect(greet('Carol')).toEqual('Olá Carol');
  })
});
describe('Verificando função getLastName', () => {
  test('O tipo é função', () => {
    expect(typeof getLastName).toBe('function');
  })
  test('O retorno está correto', () => {
    expect(getLastName(student1)).toEqual('Farias');
    expect(getLastName(student2)).toEqual('LastName não preenchido');
  })
});