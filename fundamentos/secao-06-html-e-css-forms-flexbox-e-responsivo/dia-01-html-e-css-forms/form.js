// window.onload = function () {
//   const botaoSumit = document.getElementById('botaoSubmit');
//   botaoSumit.addEventListener('click', function (evento) {
//     evento.preventDefault();
//   });
// }

function habilitaBotao () {
  const botaoSubmit = document.getElementById('botaoSubmit');
  const aceitoNovamente = document.getElementById('aceitoNovamente');
  botaoSubmit.disabled = !aceitoNovamente.checked;
}
window.onload = function (){
  const aceitoNovamente = document.getElementById('aceitoNovamente');
  aceitoNovamente.addEventListener('change',habilitaBotao);
  const botaoSubmit = document.getElementById("botaoSubmit");
  botaoSubmit.addEventListener('click', dadosValidosOuInvalidos);
}

function dadosValidosOuInvalidos () {
  const nomeCompleto = document.getElementById('nomeCompleto').value.length;
  const email = document.getElementById('e-mail').value.length;

  if (nomeCompleto < 10 || nomeCompleto > 50) {
    alert('Dados Inválidos');
  } else if (email < 10 || email > 50){
    alert('Dados Inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip!');
  }
}