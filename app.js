let num1 = Number(prompt('Введіть перше число:'));
let num2 = Number(prompt('Введіть друге число:'));

function validateNumbers(x, y) {
  if (isNaN(x) || isNaN(y)) {
    displayResult('Параметри повинні бути числами', 'black');
    return false;
  }
  return true;
}

function displayResult(message, color) {
  const resultDiv = document.getElementById('results');
  const p = document.createElement('p');
  p.textContent = message;
  p.style.color = color;
  resultDiv.appendChild(p);
}

function getColorByValue(value) {
  const maxIntensity = 200;
  const intensity = Math.min(Math.max(Math.abs(value) / maxIntensity), 1);
  let colorValue = Math.floor(255 * (1 - intensity));

  // Ensure colorValue never goes below 50 so that you never get full black when the value is to high
  colorValue = Math.max(colorValue, 50);

  if (value > 0) {
    return `rgb(0, ${colorValue}, 0)`;
  } else if (value < 0) {
    return `rgb(${colorValue}, 0, 0)`;
  } else {
    return 'black';
  }
}

function add(x, y) {
  if (validateNumbers(x, y)) {
    displayResult(`Сума: ${x + y}`, getColorByValue(x + y));
  }
}

function subtract(x, y) {
  if (validateNumbers(x, y)) {
    displayResult(`Різниця: ${x - y}`, getColorByValue(x - y));
  }
}

function multiply(x, y) {
  if (validateNumbers(x, y)) {
    displayResult(`Добуток: ${x * y}`, getColorByValue(x * y));
  }
}

function divide(x, y) {
  if (validateNumbers(x, y)) {
    if (y === 0) {
      displayResult('Ділення на нуль неможливе', 'black');
      return;
    }
    displayResult(`Частка: ${x / y}`, getColorByValue(x / y));
  }
}

if (!validateNumbers(num1, num2)) {
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
