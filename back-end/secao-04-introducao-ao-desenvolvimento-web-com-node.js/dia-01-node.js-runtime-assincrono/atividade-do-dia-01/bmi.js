const readline = require('readline-sync');

function calcuteBmi() {
  const weight = readline.questionFloat('What\'s your weight? (kg) ');
   const height = readline.questionInt('What\'s your height? (cm) ');
  const result = weight / (height / 100 * height / 100);
  console.log(`Weight: ${weight} Height: ${height}`)
  console.log(`Meu IMC é igual a: ${result}`)
  if (result < 18.5) {
    console.log('Abaixo do peso (magreza)')
  } else if (result === 24.9) {
    console.log('Peso normal')
  } else if (result === 25 && result < 29.9) {
    console.log('Sobrepeso')
  } else {
    console.log('Obesidade grau 3 ou 4')
  }
  return result.toFixed(2);
}

calcuteBmi();
