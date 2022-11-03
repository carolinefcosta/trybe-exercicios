const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criandoOsDias (){
  const criandoUl = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1){
    let dias = decemberDaysList[index];
    let elementoDias = document.createElement('li');
    elementoDias.innerHTML = dias;

    if ( dias === 24 || dias === 31) {
      elementoDias.className = 'day holiday';
      criandoUl.appendChild(elementoDias);
    } else if (dias === 4 || dias === 11 || dias === 18) {
      elementoDias.className = 'day friday';
      criandoUl.appendChild(elementoDias);
    } else if (dias === 25){
      elementoDias.className = 'day holiday friday';
      criandoUl.appendChild(elementoDias);
    } else {
      elementoDias.className = 'day';
      criandoUl.appendChild(elementoDias);
    }
  }
}
criandoOsDias();

function criandoBotao(nomeDoBotao){
  let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  let criandoNossoBotao = document.createElement('button');
  criandoNossoBotao.id = "btn-holiday";
  criandoNossoBotao.innerHTML = nomeDoBotao;
  buttonsContainer.appendChild(criandoNossoBotao);
}
criandoBotao('Feriados');

function selecionaHoliday () {
  let pegaBotao = document.querySelector('#btn-holiday');
  let pegaHoliday = document.querySelectorAll('.holiday');
  let corDeFundo = 'rgb(238,238,238)'; 
  let novaCor = 'rgb(152,251,152)';

  pegaBotao.addEventListener('click',()=>{
    for (let index = 0; index <pegaHoliday.length; index += 1){
      if (pegaHoliday[index].getElementsByClassName.background === novaCor){
        pegaHoliday[index].style.background = corDeFundo;
      } else {
        pegaHoliday[index].style.background = novaCor;
      }
    }

  })
}
selecionaHoliday();

function criandoNovoBotao2(nomeDoBotao){
  let botaoContainer = document.querySelector('.buttons-container');
  let meuNovoBotao = document.createElement('button');
  meuNovoBotao.id = 'btn-friday';
  meuNovoBotao.innerHTML = nomeDoBotao;
  botaoContainer.appendChild(meuNovoBotao);
}
criandoNovoBotao2('Sexta-feira');

function ExibeSextasFeiras(sextasFeiras) {
  let botaoFriday = document.querySelector('#btn-friday');
  let sextas = document.getElementsByClassName('friday');
  let novaMsgParaAsSextas = 'SEXTA UHUU o/'

  botaoFriday.addEventListener('click', () => {
    for (let index = 0; index < sextas.length; index += 1) { 
      if (sextas[index].innerHTML !== novaMsgParaAsSextas) {
      sextas[index].innerHTML = novaMsgParaAsSextas;
    } else {
      sextas[index].innerHTML = sextasFeiras[index];
    }
    }
  });
}
ExibeSextasFeiras();

function primeiraFuncaoMouse () {
  let recuperaDays = document.querySelector('#days');

  recuperaDays.addEventListener('mouseover', (evento) => {
    evento.target.style.fontSize = '50px';
    evento.target.style.fontWeigth = '600';
  })
};
primeiraFuncaoMouse();

function segundaFuncaoMouse () {
  let recuperaDays = document.querySelector('#days');

  recuperaDays.addEventListener('mouseout', (evento) => {
    evento.target.style.fontSize = '20px';
    evento.target.style.fontWeigth = '200';
  })
};
segundaFuncaoMouse();
