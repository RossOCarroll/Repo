function repeatedCharacters(word) {
  let result = {};
  let lowercaseWord = word.toLowerCase()

  for (let i = 0; i < lowercaseWord.length; i++) {
    let char = lowercaseWord[i];

    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }


  for (let key in result) {
    if(result[key] === 1) {
      delete result[key];
    }
  }

  console.log(result);
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }