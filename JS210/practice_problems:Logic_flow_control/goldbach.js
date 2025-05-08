function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function checkGoldbach(targetNum) {
  for (let firstNumber = 2; firstNumber <= targetNum / 2; firstNumber++) {
    let secondNumber = targetNum - firstNumber;

    if (isPrime(firstNumber) && isPrime(secondNumber)) {
      console.log(firstNumber, secondNumber);
    }

  }
}


checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53