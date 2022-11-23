const {sum, info, printMessage } = require('./script');

describe('Testando função soma - sum', () => {
  it('Verifica soma', () => {
    expect(sum(4,5)).toBe(9);
  });
  it('Verifica soma', () => {
    expect(sum(0,0)).toBe(0);
  });
  it('Verifica erro', () => {
    expect(() => {sum(4,'5')}).toThrow(new Error('parameters must be numbers'));
  });
});

describe('Teste do objeto info - info', () => {
  it('Verifica objeto info', () => {
    expect(info).toHaveProperty('personagem');
  });
  it('Verifica printMessage', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
    expect(printMessage(info)).toMatch(info.personagem);
  });
});
