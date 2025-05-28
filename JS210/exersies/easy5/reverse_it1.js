// function reverseSentence(sentence) {
//   return sentence.split(' ').reverse().join(' ');
// }


function reverseSentence(sentence) {
  let splitSentence = sentence.split(' ');
  let result = [];

  for (let i = (splitSentence.length - 1); i >= 0; i--) {
    result.push(splitSentence[i]);
  }

  return result.join(' ');
}


console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"