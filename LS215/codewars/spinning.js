/*
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"


Input:
  - A string of words
Output:
  - The same string but with the words over 5 charcaters reversed

Requirements:
  - String will consist of letters and spaces
  - Spaces will only be present when more then one word is present






*/

function spinWords(words) {
  return words.split(' ').map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('')
    } else {
      return word;
    }
  }).join(' ');
}

console.log(spinWords("Welcome"))//, "emocleW");
console.log(spinWords("Hey fellow warriors"))//, "Hey wollef sroirraw");
console.log(spinWords("This is a test"))//, "This is a test");
console.log(spinWords("This is another test"))//, "This is rehtona test");
console.log(spinWords("You are almost to the last test"))//, "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"))//, "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"))//, "ylsuoireS this is the last one");