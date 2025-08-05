/*

Write a function that takes a string and returns an object showing how many times each word appears. 
Ignore case and punctuation. Words are defined as sequences of alphabetic characters.

Input:
  - A string
Output:
  - An object where the word is the key and the count is the value

Requirements:
  - Case in-sensitive
  - Strip the punctuation
  - Return an empty object if an empty string is input

Questions:
  Will the input always be a string?
  Should contractions like “don’t” be split or preserved?
  Are numeric words (like “123”) include

Algorithm:
  - Santize the string by removing any punctuation or commas
  - Down case the string
  - Create a words object to add words and counts
  - Split the string by whitespace
    - For each word 
      - If the word already exists in the object continue
      - Append to the words object the word and count
  return the object


*/

function countWords(word, array) {
  let count = 0;

  array.forEach(ele => {
    if (ele === word) {
      count++
    }
  })

  return count;
}

function wordFrequency(string) {
  let sanitized = string.replace(/[^A-Za-z ]/g, '').toLowerCase().split(' ');
  let words = {};

  sanitized.forEach(word => {
    if (Object.keys(words).includes(word)) return 

    words[word] = countWords(word, sanitized);
  })

  console.log(words)
}

wordFrequency("Hello, hello! How are you?") 
// ➞ { hello: 2, how: 1, are: 1, you: 1 }

wordFrequency("To be or not to be, that is the question.") 
// ➞ { to: 2, be: 2, or: 1, not: 1, that: 1, is: 1, the: 1, question: 1 }

wordFrequency("") 
// ➞ {}