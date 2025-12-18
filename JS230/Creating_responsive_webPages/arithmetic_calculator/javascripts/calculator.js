document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('input[type="submit"]');

  submitButton.addEventListener('click', event => {
    event.preventDefault();
    let calculation = 0;

    const firstNumber = Number(document.getElementById('first-number').value);
    const secondNumber = Number(document.getElementById('second-number').value);
    const operator = document.getElementById('operator').value;
    const result = document.getElementById('result');

    if (operator === '+') {
      calculation = firstNumber + secondNumber;
    } else if(operator === '-') {
      calculation = firstNumber - secondNumber;
    } else if(operator === '/') {
      calculation = firstNumber / secondNumber;
    } else if(operator === '*') {
      calculation = firstNumber * secondNumber;
    }
    
    result.textContent = calculation;

  })
})