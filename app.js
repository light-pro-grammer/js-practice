const num1 = parseFloat(prompt('Enter first number:'));
const num2 = parseFloat(prompt('Enter second number:'));

if (isNaN(num1) || isNaN(num2)) {
  alert('Incorrect data entered!');
} else {
  const sum = num1 + num2;
  const diff = num1 - num2;
  const prod = num1 * num2;

  if (num2 === 0) {
    alert('The second number cannot be zero!');
  } else {
    let quotient = num1 / num2;

    if (num1 < num2) {
      let confirmation = confirm('Are you sure you want to proceed with this operation?');
      if (confirmation) {
        alert(`Sum: ${sum}\nDifference: ${diff}\nProduct: ${prod}\nQuotient: ${quotient}`);
      }
    } else {
      // Display the results in an alert window
      alert(`Sum: ${sum}\nDifference: ${diff}\nProduct: ${prod}\nQuotient: ${quotient}`);
    }
  }
}
