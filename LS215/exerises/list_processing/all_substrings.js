// function substrings(string) {
//   let subStrings = [];

//   for (let i = 0; i < string.length; i++ ) {
//     for (let j = i; j < string.length; j++) {
//       subStrings.push(string.slice(i, j + 1));
//     }
//   }

//   return subStrings;
// }

function substrings(string) {
  return string.split('').map((letter, index1) => {
    string.split('').map((letter2, index2) => {
      return string.slice(index1, index2);
    })
  })
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]