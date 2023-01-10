import { nanoid } from 'nanoid';
import "./style.css";

const button = document.querySelector('button');
const resultPassword = document.querySelector('h2');

const senhaAleatoria = () => {
  resultPassword.innerHTML = nanoid();
};

button.addEventListener('click', senhaAleatoria);