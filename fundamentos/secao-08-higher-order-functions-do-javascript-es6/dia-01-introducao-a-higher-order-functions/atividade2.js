const condicaoGanhador = (numeroJogador, numeroSorteado) => numeroJogador === numeroSorteado;

const verificaNumeroSorteio = (numeroJogador, funcaoCallBack) => {
 const numeroAleatorio = Math.floor((Math.random() * 5) + 1);

 return funcaoCallBack(numeroJogador, numeroAleatorio) ? 'Parabéns, você ganhou!' : 'Tente Novamente!';
}

console.log(verificaNumeroSorteio(5, condicaoGanhador));
