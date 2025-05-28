const transactionLog = [];

function processInput(input) {
  return parseFloat(input);
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  if (data) {
    data = processInput(data);
    transactionLog.push(data);

    alert('Thank you. Data accepted.');
  } else {
    alert('Data could not be converted into numeric amount.');
  }
}

function transactionTotal() {
  let total = 0;

  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());