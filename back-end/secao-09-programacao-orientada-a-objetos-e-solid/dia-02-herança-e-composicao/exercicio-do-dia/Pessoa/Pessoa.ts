export default class Person {
  protected MINIMUM_NAME_LENGTH = 3;

  protected MAXIMUM_AGE = 120;

  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.validatePerson( 
      this._name = name,
      this._birthDate = birthDate 
    );
  }

  get name() {
    return `${this._name}`;
  }

  set name(name: string) {
    this.validateName(name);
    this._name = name;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(date: Date) {
    this.validateBirthDate(date);
    this._birthDate = date;
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  validateName(name: string) {
    if (name.length < this.MINIMUM_NAME_LENGTH) {
      throw new Error('Invalid Name');
    }
  }

  validateBirthDate(date: Date) {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (Person.getAge(date) > this.MAXIMUM_AGE) {
      throw new Error(`A pessoa deve ter no máximo ${this.MAXIMUM_AGE} anos.`);
    }
  }

  validatePerson(name: string, date: Date) {
    this.validateName(name);
    this.validateBirthDate(date);
  }
}