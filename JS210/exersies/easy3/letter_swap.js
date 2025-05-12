function swap(words) {
  let sentenceArray = words.split(' ');

  let swapped = sentenceArray.map(word => {
    let letters = word.split('');
    [letters[0], letters[letters.length - 1]] = [letters[letters.length - 1], letters[0]];
    return letters.join('')
  });

  console.log(swapped);
}



swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"