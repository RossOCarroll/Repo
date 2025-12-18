class Calculator {
  constructor() {
    this.state = {
      currentValue: '0',
      previousValue: null,
      operator: null,
      waitingForNewValue: false,
      expression: ''
    }

    this.buttonEventListener();

  };

  calculate(a, b, operator) {
    switch(operator) {
      case '+': return a + b;
      case '-': return a - b;
      case 'x': return a * b;
      case '/': return a / b;
      case '%': return a % b;
    }
  };

  buttonEventListener() {
    document.getElementById('buttons').addEventListener('click', event => {
      event.preventDefault();

      const button = event.target;
      if (button.classList.contains('digit')) {
        this.handleDigit(button.textContent);
      } else if (button.classList.contains('op')) {
        this.handleOperator(button.textContent);
      } else if (button.classList.contains('result_button')) {
        this.handleEquals();
      } else if (button.classList.contains('control')) {
        this.handleControl(button.textContent);
      } else if (button.classList.contains('dot')) {
        this.handleDecimal();
      }
    })
  };

  handleDigit(digit) {
    const { currentValue, waitingForNewValue } = this.state;

    if (waitingForNewValue) {
      this.state.currentValue = digit;
      this.state.waitingForNewValue = false;
    } else {
      this.state.currentValue = currentValue === '0' ? digit : currentValue + digit;
    }
    this.updateScreen();
  };

  handleOperator(operator) {
    const { currentValue, previousValue, operator: prevOp} = this.state;

    if (prevOp && !this.state.waitingForNewValue) {
      const result = this.calculate(
        Number(previousValue),
        Number(currentValue),
        prevOp
      )
      this.state.currentValue = String(result);
      this.state.previousValue = result;
    } else {
      this.state.previousValue = Number(currentValue);
    }

    this.state.expression += `${currentValue} ${operator} `;

    this.state.operator = operator;
    this.state.waitingForNewValue = true;
    this.updateScreen();
  };

  updateScreen() {
    document.querySelector('.current_num').textContent = this.state.currentValue;

    document.querySelector('.calculation').textContent = 
      this.state.expression;
  };

  handleEquals() {
    const { operator, previousValue, currentValue, waitingForNewValue } = this.state;
  
    if (!operator) return;
    if (waitingForNewValue) return;
  
    this.state.expression += `${currentValue}`;
  
    const result = this.calculate(
      Number(previousValue),
      Number(currentValue),
      operator
    );
  
    this.state.currentValue = String(result);
    this.state.previousValue = null;
    this.state.operator = null;
    this.state.waitingForNewValue = true;
  
    this.state.expression = '';
  
    this.updateScreen();
  }

  handleControl(type) {
    if (type === 'C') {
      this.state = {
        currentValue: '0',
        previousValue: null,
        operator: null,
        waitingForNewValue: false,
        expression: ''
      }
    } else if (type === 'CE') {
      this.state.currentValue = '0';
      this.state.waitingForNewValue = false;
    } else if (type === 'NEG') {
      this.state.currentValue = String(Number(this.state.currentValue) * -1);
    }

    this.updateScreen();
  }

  handleDecimal() {
    const { currentValue, waitingForNewValue } = this.state;

    if (waitingForNewValue) {
      this.state.currentValue = '0.';
      this.state.waitingForNewValue = false;
    } else if (!currentValue.includes('.')) {
      this.state.currentValue += '.';
    }

    this.updateScreen();
  }
  

}




document.addEventListener('DOMContentLoaded', ()=> {
  new Calculator();
})