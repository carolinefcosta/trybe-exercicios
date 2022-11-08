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
  aceitoNovamente.addEventListener('change',habilitaBotao)
}