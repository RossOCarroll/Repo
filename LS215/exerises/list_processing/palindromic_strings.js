function substrings(string) {
  let subStrings = [];

  for (let i = 0; i < string.length; i++ ) {
    for (let j = i; j < string.length; j++) {
      subStrings.push(string.slice(i, j + 1));
    }
  }

  return subStrings;
}

function palindromes(string) {
  let stringsParts = substrings(string);
  let palindromes = [];

  stringsParts.forEach(subString => {
    let reversedString = subString.split('').reverse().join('');

    if (reversedString === subString && subString.length > 1) {
      palindromes.push(subString);
    }
  })

  return palindromes;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]