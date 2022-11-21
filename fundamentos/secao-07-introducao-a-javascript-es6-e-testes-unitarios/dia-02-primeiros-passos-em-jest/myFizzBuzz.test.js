const myFizzBuzz = require('./myFizzBuzz');

describe('testando a função myFizzBuzz', () => {
  it('condições a serem apresentadas', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz('2')).toBe(false);
  });
});
