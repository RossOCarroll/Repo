// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
// }

// let myWord = 'Hello';
// changeMyWord(myWord);
// console.log(myWord);


// on line 7 when the changeMyWord function is called on the myWord variable its passed to the fucntion and 
// assigned to the parameters `word`. line 2 the word parameter is logged to the console and will output 
// 'Hello'. line 3 word is reassigned to the return value of toUpperCase called on word. Line 8 'Hello' is logged to the console.
// This is because 'Hello' is a primative value and is therefore immutable.


// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = 'Hello';
// myWord = changeMyWord(myWord);
// console.log(myWord);


// Here the myWord variable is assigned to the value of 'Hello' and passed to the changeMyWord function as an 
// argument. In the changeMyWord function the word parameter is assinged the value of 'Hello' which is loged to 
// the console. the word parmeter is then reassigned to the return value of toUpCase called on word, then the word
// variable is returned by the function. Line 8 myWord is then reassigned to the return value of the function and
// will point to 'HELLO'.. this displace pass by value here because what is happening is reasignment.

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = 'Hello';
// let myOtherWord = changeMyWord(myWord);
// console.log(myWord);
// console.log(myOtherWord);

// Hello gets passed to the changeMyWord function then assigned to the word parameter, that parameter is logged
// to the console. word is then reassigned to the return lavue of word.toUpperCase and returned. That value is 
// assigned to myOtherWord. 'Hello' and 'HELLO'

// function changeMyWords(words) {
//   console.log(words);
//   words[0] = 'Hi';
// }

// let myWords = ['Hello', 'Goodbye'];
// changeMyWords(myWords);
// console.log(myWords);

// The array object ['Hello', 'Goodbye'] is passed to the changeMyWords in the function is is logged to the console.
// A dis

function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);