function octalToDecimal(numberString) {
  let powers = (numberString.length - 1);

  let decimalParts = numberString.split('').map(digitChar => {
    let value = Number(digitChar) * Math.pow(8, powers);
    powers -= 1;
    return value;
  });

  return decimalParts.reduce((acc, value) => acc + value);
}

console.log(octalToDecimal('233')); 
console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9