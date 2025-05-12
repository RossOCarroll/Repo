function splitAndRemoveNonLetters(words) {
  return words.split(' ').map(word => word.replace(/[^a-zA-Z]/g, ''));
}


function wordSizes(words) {
  let wordsArray = splitAndRemoveNonLetters(words);
  let wordSizes = {}

  for (let word of wordsArray) {
    let length = word.length;
    if (length === 0) { continue }
    wordSizes[length] = (wordSizes[length] || 0) + 1;
  }


  console.log(wordSizes);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}