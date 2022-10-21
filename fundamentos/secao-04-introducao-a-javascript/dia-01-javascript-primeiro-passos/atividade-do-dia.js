const x= 60;
const y= 60;
const z= 60;

let somaDoTriangulo = x+y+z;

if (somaDoTriangulo === 180 && x === 60 && y === 60 && z === 60){
    console.log("true");
} else {
    console.log("false");
}

const a = 2;
const b = 5;
const c = 10;

let soma = a+b;
let subtracao = a-b;
let divisao = a/b;
let multiplicacao= a*b;
let modulo = a%b;

if(a>b) {
    console.log("2 é maior!");
} else if (a<b) {
    console.log("5 é maior!")
}

if (a>b && a>c) {
    console.log("a é o maior!");
} else if (b>a && b>c) {
    console.log("b é o maior!");
} else if (c>a && c>b) {
    console.log("c é o maior de todos!");
} else {
    console.log("...");
}

let number= -1;

if (number >= 0){
    number="POSITIVE";
} else if (number < 0) {
    number="NEGATIVE";
} else {
    number="ZERO";
}
console.log(number);