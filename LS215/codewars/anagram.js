/*
Given two words, how many letters do you have to remove from them to make them anagrams?

Example

First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
Hints

A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase.
When you're done with this kata, check out its big brother/sister : https://www.codewars.com/kata/hardcore-anagram-difference

Input:
  - 2 strings of lowercase letters
Output:
  - The total number of char to be removed to make the string anagrams of each other

Requirements:
  - A anagram is if you can spell a word using the letters of another word
  - All inputs will be lower case
  - Iterate through either string
    - If the char is not in the other string count it


Questions:
  - Are 2 empty string anagrams?
  - Will we always recieve a string of lowercase letters?

Algorithm:
  - Iterate over both words
    - If the current character is not in the second word count it




*/



function anagramDifference(word1, word2) {
  let freq1 = {};
  let freq2 = {};
  let total = 0;

  for (let char of word1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  for (let char of word2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }

  console.log(freq1, freq2);

  let letters = new Set([...Object.keys(freq1), ...Object.keys(freq2)]);

  for (let char of letters) {
    let count1 = freq1[char] || 0;
    let count2 = freq2[char] || 0;
    total += Math.abs(count1 - count2);
  }

  return total;
}


console.log(anagramDifference("codewars", "hackerrank"))// 10