import './style.css';
import Swal from 'sweetalert2';

const INPUT = document.getElementById('input');
const BUTTON = document.getElementById('botao');
const CONSTAINER_RESULT = document.getElementById('container');
const TITLE = document.getElementById('divTitle');


const clearDivs = () => {
    const paragraphs = document.querySelectorAll('.p');
    for (let i = paragraphs.length; i >= 0; i = i - 1) {
        while (CONSTAINER_RESULT.firstChild) {
            CONSTAINER_RESULT.removeChild(CONSTAINER_RESULT.lastChild);
        }
    }
};

const getMoedas = () => {
    clearDivs();
    fetch(`https://api.exchangerate.host/latest?base=${INPUT.value}`)
        .then((data) => data.json())
        .then((info) => {
            const array = Object.entries(info.rates);
            const keys = Object.keys(info.rates);
            if (INPUT.value === "") {
                TITLE.innerText = "";
                throw new Error('Você precisa passar alguma moeda!')
            } else if (keys.includes(INPUT.value)){
                array.forEach((valor) => {                        
                    const novoP = document.createElement('p');
                    novoP.className = 'p';       
                    novoP.innerText = `💰 ${valor[0]}:  ${valor[1]}`;
                    TITLE.innerText = `Valores Referentes a 1 ${INPUT.value}`
                    CONSTAINER_RESULT.appendChild(novoP);                    
                });
            } else {
                TITLE.innerText = '';
                throw new Error(`A moeda ${INPUT.value} não é valida!`)
            }
        })
        .catch((error) => {
            Swal.fire({
                TITLE: 'Erro!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Tente novamene!'
            });
        });
};


BUTTON.addEventListener('click', () => getMoedas());
