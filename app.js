let num1 = Number(prompt('Введіть перше число:'));
let num2 = Number(prompt('Введіть друге число:'));

function validateNumbers(x, y) {
  if (isNaN(x) || isNaN(y)) {
    alert('Параметри повинні бути числами');
    return false;
  }
  return true;
}

function add(x, y) {
  if (validateNumbers(x, y)) {
    alert(`Сума: ${x + y}`);
  }
}

function subtract(x, y) {
  if (validateNumbers(x, y)) {
    alert(`Різниця: ${x - y}`);
  }
}

function multiply(x, y) {
  if (validateNumbers(x, y)) {
    alert(`Добуток: ${x * y}`);
  }
}

function divide(x, y) {
  if (validateNumbers(x, y)) {
    if (y === 0) {
      alert('Ділення на нуль неможливе');
      return;
    }
    alert(`Частка: ${x / y}`);
  }
}

if (!validateNumbers(num1, num2)) {
  // Зупини виконання коду, якщо введено невірні дані
  throw new Error('Введено невірні дані. Параметри повинні бути числами.');
}

if (num1 < num2) {
  let confirmation = confirm('Перше введене число менше другого. Ви впевнені, що бажаєте виконати цю операцію?');

  if (confirmation) {
    add(num1, num2);
    subtract(num1, num2);
    multiply(num1, num2);
    divide(num1, num2);
  }
}

if (num1 >= num2) {
  add(num1, num2);
  subtract(num1, num2);
  multiply(num1, num2);
  divide(num1, num2);
}
