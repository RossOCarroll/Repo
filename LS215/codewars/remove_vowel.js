/*
Write a function that removes the last vowel in each word in a sentence.


Input:
  - A string sentence
Output
  - The sentence but with the last vowel in each word removed

Requirements:
  - The vowels can be upper and lower cased

Questions:
  - Will there be an emoty string input?
  - Will there be digits or other characters in the sentence string?
  - Will there be any input besides a string?


Data Structure:
  - Break the sentence into single words array to iterate over

Algorithm:
  - Split the string into an array
  - Create an empty array
  - Iterate over the array
    - For each word iterate backwards
      - create a word var
      - Create a trigger set to false
      - If the current char is a vowel and the trigger is false
        - set trigger to true
        - skip char
      - else 
        - add char to word
      - reverse word and add to empty array
  - Join word array and return


*/

function removeLastVowel(sentence) {
  let words = [];

  sentence.split(' ').forEach(word => {
    let newWord = '';
    let trigger = false;

    for (let i = word.length - 1; i >= 0; i--) {
      
      if (word[i].match(/[aeiouAEIOU]/) && !trigger) {
        trigger = true;
      } else {
        newWord += word[i]
      }
    }
    words.push(newWord.split('').reverse().join(''));
  })

  return words.join(' ');
}

console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly."))
//➞ "Thos wh dar t fal miserbly cn achiev gretly."

console.log(removeLastVowel("Love is a serious mental disease."))
//➞ "Lov s  serios mentl diseas"

console.log(removeLastVowel("Get busy living or get busy dying."))
//➞ "Gt bsy livng r gt bsy dyng"

console.log(removeLastVowel("")) // ""

console.log(removeLastVowel("The quick brown fox jumps over the fence."))
// "Th qick brwn fx jmps ovr th fenc."