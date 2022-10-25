let fatorial = 1;
for (let i = 10; i > 0; i -= 1){
    fatorial = fatorial*i;
}
console.log(fatorial);

let word = 'tryber';
let reverso = " ";

for (let index = 0; index < word.length; index += 1){
    reverso += word[word.length -1 - index];
}
console.log(reverso);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index1 = 0; index1 < array.length; index1 += 1){
    if (array[index1].length > maiorPalavra.length){
        maiorPalavra = array[index1];
    }
}

for (let index2 =0; index2 < array.length; index2 += 1){
    if (array[index2].length < menorPalavra.length){
        menorPalavra = array[index2];
    }
}
console.log(maiorPalavra);
console.log(menorPalavra);