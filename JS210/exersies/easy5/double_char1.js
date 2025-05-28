function repeater(string) {
  let result = '';

  for (let index = 0; index < string.length; index++) {
    result += string[index] + string[index];
  }

  console.log(result);
}


repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""