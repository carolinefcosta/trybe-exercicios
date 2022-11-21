const {encode, decode} = require('./encodeDecode');

describe('Testando funções encode e decode', () => {
  it('definindo encode', () => {
    expect(encode).toBeDefined();
  });
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('invertendo vogais', () => {
    expect(encode('ana')).toEqual('1n1');
  });
  it('invertendo vogais', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  it('invertendo vogais', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  it('invertendo vogais', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  it('invertendo vogais', () => {
    expect(encode('nu')).toEqual('n5');
  });
  it('checando números de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);
  });

  it('definindo decode', () => {
    expect(decode).toBeDefined();
  });
  it('encode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('trocando números por vogais', () => {
    expect(decode('1n1')).toEqual('ana');
  });
  it('trocando números por vogais', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  it('trocando números por vogais', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });
  it('trocando números por vogais', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  it('trocando números por vogais', () => {
    expect(decode('n5')).toEqual('nu');
  });
  it('checando números de caracteres', () => {
    expect(decode('trybe').length).toEqual(5);
  });
});