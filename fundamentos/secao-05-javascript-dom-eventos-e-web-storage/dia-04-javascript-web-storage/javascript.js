window.onload = () => {
function criandoCorDeFundo (cor) {
    let classeContent = document.querySelector('.content');
    classeContent.style.backgroundColor = cor;
    localStorage.setItem('backgroundColor', cor);
}

function fonteColorida (cor) {
    let paragrafos = document.querySelectorAll('.paragraph');
    for (let index = 0; index < paragrafos.length; index += 1) {
        paragrafos[index].style.color = cor;
    }
    localStorage.setItem('corDaFonte', cor);
}

function tamanhoDaFonte (tamanho) {
    let paragrafos = document.querySelectorAll('.paragraph');
    for (let index = 0; index < paragrafos.length; index += 1) {
        paragrafos[index].style.fontSize = tamanho;
    }
    localStorage.setItem('tamanhoDaFonte', tamanho);
}

function espacoEntreAsLinhas (espacoEntreLinhas) {
    let paragrafos = document.querySelectorAll('.paragraph');
    for (let index = 0; index < paragrafos.length; index += 1) {
        paragrafos[index].style.lineHeight = espacoEntreLinhas;
    }
    localStorage.setItem('espacoEntreAsLinhas', espacoEntreLinhas);
}

function estiloFonte (styleFonte) {
    let paragrafos = document.querySelectorAll('.paragraph');
    for (let index = 0; index < paragrafos.length; index += 1) {
        paragrafos[index].style.fontFamily = styleFonte;
    }
    localStorage.setItem('estiloDaFonte', styleFonte);
}

let corDeFundoDoBotao = document.querySelectorAll('#background-color>button');
    for (let index = 0; index < corDeFundoDoBotao.length; index += 1) {
        corDeFundoDoBotao[index].addEventListener("click", (event) => {
        criandoCorDeFundo(event.target.innerHTML);
        })
    }

let corDaLetraBotao = document.querySelectorAll('#font-color>button');
    for (let index = 0; index < corDaLetraBotao.length; index += 1) {
        corDaLetraBotao[index].addEventListener("click", (event) => {
        fonteColorida(event.target.innerHTML);
        })
    }

let tamanhoDaFonteBotao = document.querySelectorAll('#font-size>button');
    for (let index = 0; index < tamanhoDaFonteBotao.length; index += 1) {
        tamanhoDaFonteBotao[index].addEventListener("click", (event) => {
        tamanhoDaFonte(event.target.innerHTML);
    })
}

let espacoEntreLinhasBotao = document.querySelectorAll('#line-height>button');
    for (let index = 0; index < espacoEntreLinhasBotao.length; index += 1) {
        espacoEntreLinhasBotao[index].addEventListener("click", (event) => {
        espacoEntreAsLinhas(event.target.innerHTML);
    })
}

let estiloFonteBotao = document.querySelectorAll('#font-family>button');
    for (let index = 0; index < estiloFonteBotao.length; index += 1) {
        estiloFonteBotao[index].addEventListener("click", (event) => {
        estiloFonte(event.target.innerHTML);
    })
}
}

const inicializar = () => {
    let backgroundColor = localStorage.getItem("backgroundColor")
    if (backgroundColor) criandoCorDeFundo(backgroundColor)

    let fontColor = localStorage.getItem("CorDaFonte")
    if (fontColor) fonteColorida(fontColor)

    let fontSize = localStorage.getItem("TamanhoDaFonte")
    if (fontSize) tamanhoDaFonte(fontSize)

    let lineHeight = localStorage.getItem("espacoEntreAsLinhas")
    if (lineHeight) espacoEntreAsLinhas(lineHeight)

    let fontFamily = localStorage.getItem("estiloDaFonte")
    if (fontFamily) estiloFonte(fontFamily)
  }

inicializar();