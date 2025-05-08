const nums = {
  0: '0', 
  1: '1', 
  2: '2', 
  3: '3', 
  4: '4', 
  5: '5', 
  6: '6',
  7: '7',
  8: '8',
  9: '9'
};

function integerToString(int) {
  let result = ''

  if (int === 0) {
    return '0';
  }

  while (int > 0) {
    let digit = int % 10;
    result = digit + result;
    int = Math.floor(int / 10);
  }

  return result;
}

integerToString(4321);      // "4321"
console.log(integerToString(0));         // "0"
integerToString(5000);      // "5000"

function signedIntegerToString(int) {
  let signedResult

  if (int > 0) {
    signedResult = '+' + integerToString(int);
  } else if (int === 0) {
    signedResult = '0';
  }
  else {
    signedResult = '-' + integerToString(int * -1);
  }

  console.log(signedResult);
}

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"

console.log(signedIntegerToString(-0) === "-0");