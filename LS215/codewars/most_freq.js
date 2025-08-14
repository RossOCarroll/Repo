/*
Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:

A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

Input:
  - A string representing a text
Output:
  - an array with the 3 most accruing words in the text in decending order

Requirements:
  - A word is A-z a-z and may include apostrohies
  - match are chase insesitive all should be lower-cased
  - If a text includes fewer then 3 either the top 2 or top 1 should be returned
  - Split the string by spaces
  - Get the count of the words return the top 3

Questions:
  - Will there always be a string input? empty string?


data structure:
  - Store the words and the counts in a 2d array

Algorithm:
  - down case the text
  - Sanitize the string of character except apostrophes or replace with white space
  - declare an empty array
  - Split the string by whitespace
  - Iterate over the array
    - GetCount helper method that return the count
    - Push the the empty array the word and the count
  - Sort the array by the count
  - Return 0 - 2 index opf the array

*/

function getCounts(keyword, text) {
  let count = 0;

  text.split(' ').forEach(word => {
    if (keyword === word) {
      count++;
    }
  })
  return [keyword, count];
}

function topThreeWords(text) {
  text = text.toLowerCase().replace(/[^a-z'\s]/g, '');
  let countedWords = new Set();
  let counts = [];
  
  text.split(' ').filter(word => word && /[a-z]/.test(word)).forEach(word => {
    if (!countedWords.has(word)) {
      counts.push(getCounts(word, text));
      countedWords.add(word);
    }
  });

  let topThree = [];
  
  counts.sort((a, b) => b[1] - a[1]).slice(0, 3).forEach(count =>
    topThree.push(count[0])
  )

  return topThree;
}

const text = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`
console.log(topThreeWords(text)); // ["a", "of", "on"]

const text2 = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";
console.log(topThreeWords(text2)); // --> ["e", "ddd", "aa"]

const text3 = "  //wont won't won't";
console.log(topThreeWords(text3)); // ["won't", "wont"]


