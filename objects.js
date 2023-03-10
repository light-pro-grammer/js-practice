function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

let user = {
  name: 'Іван',
  age: 25,
  sayHello: function () {
    console.log('Привіт, я ' + this.name + ', мені ' + this.age + ' років');
  },
};

user.sayHello();

////////CALCULATOR////////
let calculator = {
  num1: 0,
  num2: 0,
  ask: function () {
    this.num1 = +prompt('Введіть перше число', 0);
    this.num2 = +prompt('Введіть друге число', 0);
  },
  sum: function () {
    alert('Сума: ' + (this.num1 + this.num2));
  },
  mul: function () {
    alert('Добуток: ' + this.num1 * this.num2);
  },
};

calculator.ask();
calculator.sum();
calculator.mul();
