function isXor(value1, value2) {
  if (!!value1 === true && !!value2 === false) {
    return true;
  } else if (!!value1 === false && !!value2 === true) {
    return true;
  } else {
    return false;
  }
}



console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false