function crunch(string) {
  let result = ''

  for (let index = 0; index < string.length; index++) {
    if (string[index] !== result[result.length - 1]) {
      result += string[index];
    }
  }

  return result;
}



console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""