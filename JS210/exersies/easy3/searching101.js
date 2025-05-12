const readline = require('readline-sync');

function suffix(num) {
  switch (num) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

function searching() {
  let numbers = [];
  let counter = 1;

  while (counter <= 5 ) {
    let num = readline.question(`Enter the ${counter}${suffix(counter)} number: `);

    numbers.push(num);
    counter++
  }

  let lastNum = readline.question('Enter the last number: ');

  if (numbers.includes(lastNum)) {
    console.log(`The number ${lastNum} appears in ${numbers}`)
  } else {
    console.log(`The number ${lastNum} does not appear in ${numbers}`)
  }

  console.log(numbers);
}

searching();