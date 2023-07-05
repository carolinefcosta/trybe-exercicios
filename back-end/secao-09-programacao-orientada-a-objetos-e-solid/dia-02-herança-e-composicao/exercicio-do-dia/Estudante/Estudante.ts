class Estudante {
  matricula: string;
  nome: string;
  notasDeProvas: number[];
  notasDeTrabalho: number[];

  constructor(
    matricula: string,
    nome: string,
  ) {
    this.matricula = matricula;
    this.nome = nome;
    this.notasDeProvas = [];
    this.notasDeTrabalho = [];
  }

  getSomaNotas() {
    return [...this.notasDeProvas, ...this.notasDeTrabalho]
      .reduce((notaAnterior, nota) => {
        const soma = nota + notaAnterior;

        return soma;
      }, 0)
  }

  getMediaNotas() {
    const somaNotas = this.getSomaNotas();
    const div = this.notasDeProvas.length + this.notasDeTrabalho.length;

    return Math.round(somaNotas / div);
  }
}

const personOne = new Estudante('202001011', 'Maria da Silva');

personOne.notasDeProvas = [25, 20, 23, 23];
personOne.notasDeTrabalho = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.getSomaNotas());
console.log('Média de todas as notas: ', personOne.getMediaNotas());