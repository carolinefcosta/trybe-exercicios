let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

let menuServices = menu[1];

console.log(menuServices);

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);

let alunos = ["Carol", "Henrique", "Camila"];

for (let index = 0; index < alunos.length; index++) {
    let mensagem = ("Boas Vindas, ") + alunos[index] + "!";
    console.log(mensagem);
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index = index + 1){
    console.log(groceryList[index]);
}

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

let word = 'Caroline';
for (let letter of word) {
  console.log(letter);


let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let imprimindo of names){
    console.log(imprimindo);
}
