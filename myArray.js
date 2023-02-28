const numbers = [4, 8, 15, 16, 23, 42, 1, 99, 7, 11];

//=======================================
//SUMMING AN ARRAY (using for loop)
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === 'number') {
    sum += numbers[i];
  }
}

console.log(sum);

//=======================================
//MIN & MAX (using for loop)
let min;
let max;

for (let i = 0; i < numbers.length; i++) {
  const current = numbers[i];
  if (typeof current === 'number') {
    if (min === undefined || current < min) {
      min = current;
    }
    if (max === undefined || current > max) {
      max = current;
    }
  }
}

console.log(`Minimum value: ${min}`);
console.log(`Maximum value: ${max}`);

//=======================================
//PYRAMID
for (let i = 1; i <= 5; i++) {
  let row = '';

  for (let j = 0; j < i; j++) {
    row += '#';
  }

  console.log(row);
}
