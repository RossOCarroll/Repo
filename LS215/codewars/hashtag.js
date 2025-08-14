/*

1249
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

Input:
  - A string of words
output:
  - A string hashtag

Requirements:
  - <Must start with '#'
  - All the words must be capitialized
  - If the result is over 140 characters in length return false
  - If the input string is empty then we return false

Questions:
  - Will we always recieve a string as an argument?
  - Will there be digits in the string?
  - Will the string be longer the 2 chars?

Data structure:
  - Split the string into an array 
  - Return a string

Algorithm:
  - Split the string into an array
  - Iterate over the array
    - At 0 index of each word to upper case
  - Join the string 
  - Replace all whitespace with ''
  - Concat '#' to the string and return
  - if the string is over 140 in length return false


*/

function generateHashtag(str) {
  if (str.replace(/ /g, '').length < 1) return false;
  let hashtag = str.split(' ');

  hashtag = hashtag
    .filter(Boolean)
    .map(word => word[0].toUpperCase() + word.slice(1)).join('');

  if (hashtag.length >= 140) return false;

  return '#' + hashtag;
}


console.log(generateHashtag(""))//, false, "Expected an empty string to return false")
console.log(generateHashtag(" ".repeat(200)))//, false, "Still an empty string")
console.log(generateHashtag("Do We have A Hashtag"))//, "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(generateHashtag("Codewars"))//, "#Codewars", "Should handle a single word.")
console.log(generateHashtag("Codewars Is Nice"))//, "#CodewarsIsNice", "Should remove spaces.")
console.log(generateHashtag("Codewars is nice"))//, "#CodewarsIsNice", "Should capitalize first letters of words.")
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))//, "#CodeWars")
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))//, false, "Should return false if the final word is longer than 140 chars.")
console.log(generateHashtag("a".repeat(139)))//, "#A" + "a".repeat(138), "Should work")
console.log(generateHashtag("a".repeat(140)))//, false, "Too long")

