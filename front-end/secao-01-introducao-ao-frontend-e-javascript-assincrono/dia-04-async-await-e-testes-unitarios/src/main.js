import Swal from 'sweetalert2';
import "./style.css";

const INPUT = document.getElementById('input');
const BUTTON = document.getElementById('button');
const RESULT = document.getElementById('result');

async function cepInfo() {
  const cep = INPUT.value;

  try{
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    RESULT.innerText = JSON.stringify(data);
    console.log(data)
  } catch(error) {
    Swal.fire('Ops! Ocorreu um erro.', error.message, 'error');
  }
}

BUTTON.addEventListener('click', cepInfo);
