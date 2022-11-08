const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', function (evento){
  evento.preventDefault();
});

INPUT_CHECKBOX.addEventListener('click', function (evento){
  evento.preventDefault();
});

INPUT_TEXT.addEventListener('keypress', function (evento) {
  const caracter = evento.key;
  if (caracter !== 'a'){
    evento.preventDefault();
  }
});
