function isUppercase(string) {
  for (let i = 0; i < string.length; i++) {
    if (!(string[i] === string[i].toUpperCase())) {
      return false;
    }
  }

  return true;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true