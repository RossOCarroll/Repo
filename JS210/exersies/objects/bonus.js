function calculateBonus(...args) {
  return args[1] ? args[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));              // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000


// Here we use ...args which will turn the arguments passed to the function into an arguments
//  object that we can call on in our function.