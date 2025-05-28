const CONSONANTS = [
  'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'
];

function doubleConsonants(string) {
  let result = '';

  for (let index = 0; index < string.length; index++) {
    if (CONSONANTS.includes(string[index].toLowerCase())) {
      result += string[index] + string[index];
    } else {
      result += string[index];
    }
  }

  console.log(result);
}



doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""