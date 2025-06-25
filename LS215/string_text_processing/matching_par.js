function isBalanced(string) {
  let parTally = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      parTally += 1;
    } else if (string[i] === ')') {
      parTally -= 1;
    }
    if (parTally < 0) {
      return false;
    }
  }

  return parTally === 0;
}


console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false