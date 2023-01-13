import "./style.css";

const INPUT = document.getElementById('input');
const BUTTON = document.getElementById('button');
const RESULT = document.getElementById('result');

BUTTON.addEventListener('click', async () => {
  const cep = INPUT.value;

  try{
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    RESULT.innerText = JSON.stringify(data);
    console.log(data)
  } catch(error) {
    RESULT.innerHTML = `CEP inválido: ${error.message}`;
  }
});