class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  sayHello() {
    console.log('Olá mundo!');
  }
}

class SubClass extends Superclass {}

const myFunction = (obj: Superclass) => {
  obj.sayHello();
}

const sup = new Superclass();
const sub = new SubClass();

myFunction(sup);
myFunction(sub);