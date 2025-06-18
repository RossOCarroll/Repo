function sum(num) {
  return num.toString().split('').map(num => Number(num)).reduce((acc, value) => acc + value);

}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45