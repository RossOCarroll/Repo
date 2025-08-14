/*
There is a message that is circulating via public media that claims a reader can easily read a message where 
the inner letters of each words is scrambled, as long as the first and last letters remain the same and the 
word contains all the letters.

Another example shows that it is quite difficult to read the text where all the letters are reversed rather 
than scrambled.

In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or 
reversed, ours will be sorted alphabetically

Requirement
return a string where:

the first and last characters remain in original place for each word
characters between the first and last characters must be sorted alphabetically
punctuation should remain at the same place as it started, for example: shan't -> sahn't
Assumptions

words are seperated by single spaces
only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
special characters do not take the position of the non special characters, for example: -dcba -> -dbca
for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
ignore capitalisation

Input:
  - a string
Output:
  - A new string where the first and last letter of the word remain the same but the letters in between are
   arranged alphabetically

Requirements:
  - Words are seperated by spaces
  - Punctuation should remain the same
  - Special charaters do not take the position of non special characters
  - Ignore capitalization

Questions:
  - Will there be an empty string input?
  - Will there always be one argument a string?


Data Structure:
  - Split the string input an array by white space
  - Join the array back to a string

Algorithm:
  - Split the string input an array
  - Iterate over the array
    - Grab the first and last element
    - Grab the middle of the string
      - Sort alphabetically
    - Iterate over the middle
      - If the element is a special char 
        - skip
      - else 





*/


function ScrambleWords(string) {
  if (string.length === 1) return string;
  let splitString = string.split(' ');
  let result = [];

  splitString.forEach(word => {
    if (word.length <= 2) {
      result.push(word);
      return;
    }

    let first, last, middle;

    if (/[^A-Za-z]/.test(word[0])) {
      first = word.slice(0, 2);
      middle = word.slice(2, word.length - 1).split('');
      last = word[word.length - 1];
    } else if (/[^A-Za-z]/.test(word[word.length - 1])) {
      first = word[0];
      last = word.slice(word.length - 2);
      middle = word.slice(1, word.length - 2).split('');
    } else {
      first = word[0];
      last = word[word.length - 1];
      middle = word.slice(1, word.length - 1).split('');
    }

    let lettersOnly = middle.filter(ch => /[A-Za-z]/.test(ch)).sort();

    for (let i = 0, alphaIndex = 0; i < middle.length; i++) {
      if (/[^A-Za-z]/.test(middle[i])) continue;
      middle[i] = lettersOnly[alphaIndex++];
    }

    result.push(first + middle.join('') + last);
  });

  return result.join(' ');
}


console.log(ScrambleWords('professionals'))//, 'paefilnoorsss', 'The first and last letters of a word should reamin in place with the inner letters sorted')
console.log(ScrambleWords('i'))//, 'i', 'Must handle single charater words')
console.log(ScrambleWords('me'))//, 'me', 'Must handle 2 charater words')
console.log(ScrambleWords('you'))//, 'you', 'Must handle 3 charater words')
console.log(ScrambleWords('card-carrying'))//, 'caac-dinrrryg', 'Only spaces separate words and punctuation should remain at the same place as it started')
console.log(ScrambleWords("shan't"))//, "sahn't", 'Punctuation should remain at the same place as it started')
console.log(ScrambleWords('-dcba'))//, '-dbca', 'Must handle special character at the start')
console.log(ScrambleWords('dcba.'))//, 'dbca.', 'Must handle special character at the end')
console.log(ScrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."))//, "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.", 'Must handle a full sentence')
