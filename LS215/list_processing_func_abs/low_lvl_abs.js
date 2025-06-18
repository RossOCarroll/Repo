function isAllUnique(string) {
  let seen = {};
  let lowerCasedString = string.toLowerCase();

  for (let i = 0; i < lowerCasedString.length; i++) {
    if (lowerCasedString[i] === ' ') {
      continue;
    }

    if (seen[lowerCasedString[i]]) {
      return false;
    } else {
      seen[lowerCasedString[i]] = true; 
    }
  }

  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true