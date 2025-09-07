/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Arguments (Haskell)

First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

Input:
  - a string of words delimited by spaces
  - A string of words that mus always be lowercase
Output
  - The string returned in title case

Requirements:
  - The list of minor words should always be lowercase except if its the first word in the string
  - We wont always recieve a second argument instead of undifined where were title case the string


Questions:
  - Will the words always contain letters?
  - Will there be any arguments other then undefined and the string

Data Structure:
  - Split each string into arrays to iterate over

Algorithm:
  - Split and down case both input strings
  - Iterate over the title
    - if index is 0
      - return the first letter to up case + the rest of the word
    - Else
      - If word is included in the list of minor words
        - continue
      - Else 
        - - return the first letter to up case + the rest of the word

  - join and return the string


*/

function titleCase(title, minorWords) {
  if (!title) return '';
  title = title.toLowerCase().split(' ');
  minorWords = (minorWords || '').toLowerCase().split(' ');

  let titleized = title.map((word, index) => {
    if (index === 0) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      if (minorWords.includes(word)) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    }
  })

  return titleized.join(' ');
}


console.log(titleCase('a clash of KINGS', 'a an the of')) // should return: 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')) // should return: 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')) // should return: 'The Quick Brown Fox'