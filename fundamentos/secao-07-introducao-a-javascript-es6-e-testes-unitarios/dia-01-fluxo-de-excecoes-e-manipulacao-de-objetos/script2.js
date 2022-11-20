const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionaTurna = (objeto, chave, valor) => {
  objeto[chave] = valor;
}

adicionaTurna(lesson2, 'turno', 'noite');
// console.log(lesson2);

const listaChaves = (objeto) => Object.keys(objeto);

// console.log(listaChaves(lesson1));
// console.log(listaChaves(lesson2));
// console.log(listaChaves(lesson3));

const tamanhoObjeto = (objeto) => Object.keys(objeto).length;

// console.log(tamanhoObjeto(lesson1));
// console.log(tamanhoObjeto(lesson2));
// console.log(tamanhoObjeto(lesson3));

const listaValores = (objeto) => Object.values(objeto);

// console.log(listaValores(lesson1));
// console.log(listaValores(lesson2));
// console.log(listaValores(lesson3));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// console.log(allLessons);

const getNumberOfStudents = (objeto) => {
  let totalDeAlunos = 0;

  const chaves = Object.keys(objeto);
  for ( index in chaves) {
    totalDeAlunos += objeto[chaves[index]].numeroEstudantes;
  }
  return totalDeAlunos;
}

// console.log(getNumberOfStudents(allLessons));

const valorChave = (objeto, number) => Object.values(objeto)[number];

// console.log(valorChave(lesson1, 0));

const verifyPair = (objeto, chave, valor) => {
  const entries = Object.entries(objeto);
  let chaveValorExiste = false;

  for (let index in entries) {
    if (entries[index][0] === chave && entries[index][1] === valor) {
      chaveValorExiste = true;
    }
  }
  return chaveValorExiste;
}

// console.log(verifyPair(lesson3, 'materia', 'Matemática'));

const aulaMatematica = (objeto) => {
  let totalAlunos = 0;
  const chaves = Object.keys(objeto);

  for (let index in chaves) {
    if (objeto[chaves[index]].materia === 'Matemática') {
      totalAlunos += objeto[chaves[index]].numeroEstudantes;
    }
  }
  return totalAlunos;
}

// console.log(aulaMatematica(allLessons));