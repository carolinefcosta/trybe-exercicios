//Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
for (let key in names)

console.log("Olá, " + names[key] + "!");

//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
for (let key1 in car)

console.log(key1, car[key1]);

//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:


function soma(a, b){
    return a+b;
}
function sub(a, b){
    return a-b;
}
function mult(a, b){
    return a*b;
}
function div(a, b){
    return a/b;
}
function mod(a, b){
    return a%b;
}

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorNumero(number1, number2){
    if (number1 > number2){
        return "O maior número é: " + number1;
    } else if (number2 > number1){
        return "O maior número é: " + number2;
    } else {
       return "Os números são iguais";
    }
}

//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function maiorDeTres (num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return 'O maior número é: ' + num1;
    } else if (num2 > num1 && num2 > num3){
        return 'O maior número é: ' + num2;
    } else {
        return 'O maior número é: ' + num3;
    }
}

//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function positivoNegativo (numero){
    if (positivoNegativo > 0) {
        return 'Esse número é positivo!';
    } else if (positivoNegativo < 0){
        return 'Esse número é negativo!';
    } else {
        return 'Igual a zero.'
    }
}

//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: 'O último MacPatinhas',
  };

console.log('Bem-vinda, ' + info['personagem'] + '!');
info['recorrente'] = 'Sim';

console.log(info, info2);

for (let key2 in info)

console.log(key2);

console.log(info[key2]);

//Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log("O livro favorito de " + leitor['nome'] + " " + leitor['sobrenome'] + " " + 'se chama ' + leitor.livrosFavoritos[0].titulo + '.');

//Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });
console.log(leitor);

//Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');