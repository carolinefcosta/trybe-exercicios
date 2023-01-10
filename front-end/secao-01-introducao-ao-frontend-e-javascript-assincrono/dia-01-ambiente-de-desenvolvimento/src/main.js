import { nanoid } from 'nanoid';
import "./style.css";
import copy from 'clipboard-copy';;

const button = document.querySelector('button');
const resultPassword = document.querySelector('h2');

const senhaAleatoria = () => {
  resultPassword.innerHTML = nanoid();
};

const copiandoSenha = (evento) => {
  copy(evento.target.innerHTML);
  alert('Senha copiada!');
};

button.addEventListener('click', senhaAleatoria);
resultPassword.addEventListener('click', copiandoSenha);