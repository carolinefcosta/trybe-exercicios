//🚀 Transforme a função numeroAleatorio em uma arrow function; Copie o código abaixo:
/*function numeroAleatorio() {
    return Math.random()
  }
  console.log(numeroAleatorio());*/

let aletorioNumero = () => Math.random();

//🚀 Transforme a função hello em uma arrow function;
/*function hello(nome) {
    return `Olá, ${nome}!`
  }
  let nome = 'Ivan';
  console.log(hello(nome));*/

let hello = nome => `Olá, ${nome}`;
let nome = 'Carol';
console.log(hello(nome));

//🚀 Transforme a função nomeCompleto em uma arrow function;
/*function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
  }*/
 
let nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));

//🚀 Altere a expressão if/else utilizando ternary operator;
//let speed = 90;
let speed = 90;

const speedCar = (speed) => (
  speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
);

console.log(speedCar(speed));

/*Crie uma função que ligue e desligue um motor de um carro.

Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);

Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;

Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);

Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).

Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator.*/

let statusCarro = 'desligado';

let ligarDesligar = () => (
    statusCarro === 'desligado' ? statusCarro = 'ligado' : statusCarro = 'desligado'
)
console.log(`O motor está ${ligarDesligar()} !`);
console.log(`O motor está ${ligarDesligar()} !`);
console.log(`O motor está ${ligarDesligar()} !`);

/*🚀 Crie uma função que calcule a área de um círculo.

Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.

Com base nessa informação:

Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;

Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);

Crie a lógica para retornar a área do círculo;

Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento).

Exemplo de retorno:

Parâmetro: 3

Retorno: Essa é a área do círculo: 28.259999999999998

Parâmetro: 5

Retorno: Essa é a área do círculo: 78.5*/

const circleArea = raio => {
    const pi = 3.14;

    let area = pi * raio * raio;

    return console.log(`Essa é a área do círculo: ${area}`);
}
circleArea(5);
circleArea(7);

/*Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

O nome da função deverá ser substituaX;

A função deverá receber um nome por parâmetro;

Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';

A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

Exemplo:

Parâmetro: ‘Bebeto’
Retorno: ‘Tryber Bebeto aqui!’
Spoiler: O {{< extlink text=”método split()” href=”https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split”>}} pode ser utilizado de diferentes maneiras, como para separar as palavras de um texto.

Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

O nome da função deverá ser minhasSkills;

A função deverá receber o retorno da Função 1 - substituaX por parâmetro;

Declare dentro da função uma variável com o nome skills, do tipo const;

A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

Exemplo de retorno:

Tryber Bebeto aqui!

Minhas três principais habilidades são:

JavaScript
HTML
CSS*/

const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
    for (let index = 0; index < fraseArray.length; index += 1) {
      if (fraseArray[index] === 'x') {
        fraseArray[index] = nome;
      }
    }  
    return fraseArray.join(' ');
  };
  
console.log(substituaX('Carol'));

const minhasSkills = (func) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let resultado = `
    ${func}
  
    Minhas três principais habilidades são:`;
    for (let index = 0; index < skills.length; index += 1) {
      resultado = `${resultado}
      - ${skills[index]}`; // reatribui e adiciona a skill atual à variável resultado
    }
    return resultado;
  };
  console.log(minhasSkills(substituaX('Carol')));
