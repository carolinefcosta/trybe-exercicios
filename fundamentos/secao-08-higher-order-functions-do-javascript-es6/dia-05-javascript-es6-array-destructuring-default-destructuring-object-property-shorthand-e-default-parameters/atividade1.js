// Produza o mesmo resultado abaixo, porém utilizando array destructuring
const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}
// sum(primeNumbers[0], primeNumbers[2]);

const [ number1, number2, number3 ] = primeNumbers;
// sum(number1, number3);

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[ animal, bebida, comida ] = [ comida, animal, bebida ];
// console.log(comida, animal, bebida);

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[ ,,, ...numerosPares ] = numerosPares;
// console.log(numerosPares); 

// Do jeito que está, quando person é passado para a função getNationality, o retorno é João is undefined. Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian.
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

// console.log(getPosition(-19.8157, -43.9542));

const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

// greeting(); 

// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number, value = 1) => number * value;

// console.log(multiply(8));
