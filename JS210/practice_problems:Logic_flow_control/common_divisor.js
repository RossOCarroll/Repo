function gcd(value1, value2) {
  while (value2 !== 0) {
    let temp = value2;
    value2 = value1 % value2;
    value1 = temp;
  }
  return value1;
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1