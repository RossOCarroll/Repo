// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
// }

// let myWord = 'Hello';
// changeMyWord(myWord);
// console.log(myWord);


// // When the `myWord` variable is passed to the changeMyWord function the parameter word is a local variable
// // that is assigned the value of 'Hello'. `line 2` 'Hello' is logged to the console. line the word local variable
// // is reassigned to the `toUpperCase()` method called on word. Undefined is returned from changeMeWord function
// // line 8 'Hello` is logged to the console. The string 'Hello' is a primitive value and is immutable. This demonstrates 
// // that this code is pass by value.

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = 'Hello';
// myWord = changeMyWord(myWord);
// console.log(myWord);

// // This code will output 'Hello' anf then 'HELLO'. when `myWord` is passed to the function the parameter worrd gets 
// // assigned to the value of `myWord`. this two variables point to different values in memory. The variable `word`
// // is logged to the console which outputs `'Hello'`. `word` is then reassigned to the return value of `word.yoUpperCase()`
// // then word is returned by the function. `myWord` is the reasgined to that return value and is logged to the 
// // console and will output `'HELLO'`. This code still demonstrates pass by value as the function is reassgining 
// // the value passed to it.

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = 'Hello';
// let myOtherWord = changeMyWord(myWord);
// console.log(myWord);
// console.log(myOtherWord);

// // This code will output `'Hello'` `'Hello'` and `'HELLO'`. `myWord` is passed to the changeMyWord function
// // The parmeter word is assigned to the value of `myWord`. `word` is then logged to the console the `word` is reassigned
// // to the return value of `word.toUpperCase()` then word is reutnr ed by the function. `myOtherWord` is assigned to
// // the return value of the changeMyWord function. This behaivor still exibits pass by value as we are working
// // with primitive values that are immutable.

// function changeMyWords(words) {
//   console.log(words);
//   words[0] = 'Hi';
// }

// let myWords = ['Hello', 'Goodbye'];
// changeMyWords(myWords);
// console.log(myWords);

// // When `myWords` is passed to the `changeMyWords` function it is assgned to the local variable words and then logged to the
// // console. Then the value of `words` at index 0 is reassigned to the value `Hi`, this is a destructive action.
// // When myWords is logged to the console the output will be `[ 'Hi', 'Goodbye' ]`. This code demonstrates
// // pass by reference because we are passing in a reference to the object to the function. The array is a reference type
// // rather then a primitive.

function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

// This code will output [ 'Hello', 'Goodbye' ] twice. We are passing the `myWords` variable to the changeMyWords
// function. The parmeter `words` is then assigned the value passed to the function. `words` is then logged to the console
// . `words` is then reassigned to ['Hi', 'Goodbye'] and undefined is returned from the function. This demonstrates pass by
// reference ass we are not mutating the orginal array object.

