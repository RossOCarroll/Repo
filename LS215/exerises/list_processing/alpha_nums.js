// const DIGITS = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
//   ten: 10,
//   eleven: 11,
//   twelve: 12,
//   thirteen: 13,
//   fourteen: 14,
//   fifteen: 15,
//   sixteen: 16,
//   seventeen: 17,
//   eighteen: 18,
//   nineteen: 19,
// };

// function alphabeticNumberSort(array) {
//   let wordsArray = Object.keys(DIGITS).sort();
//   let sortedNumbers = wordsArray.map(word => DIGITS[word]);

//   console.log(sortedNumbers);
// }



// alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


const wordSort = function(num1, num2) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                        'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                        'twelve', 'thirteen', 'fourteen', 'fifteen',
                        'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]