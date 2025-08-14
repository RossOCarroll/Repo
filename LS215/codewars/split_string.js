/*
6 kyu
=end
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of
characters then it should replace the missing second character of the final pair with an underscore ('
_
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

Input:
  - A string
Output:
  - An array of 2 character strings

Requirements:
  - Given the input string we need to split the string into substring pairs
  - If there is an odd number of characters in the string we appened '_' to the last letter

Questions:
  - Will the input string every be empty?
  - Will we alwasy have just one argument, a string?
  - Will the string be any length?

Data Structure:
  - Split the string into an array of substring pairs

Algorithm:
  - Create an substring array
  - Split the string into subString pairs
    - Loop over the string and incement the index by 2
      - slice the by the index + 2
      - append to substring array
  - If the string is an odd length 
    - Append '_' to the last element

*/

function getSubstrings(string) {
  let substrings = [];

  for (let i = 0; i < string.length; i += 2) {
    substrings.push(string.slice(i, i + 2))
  }
  return substrings;
}

function solution(string) {
  let substrings = getSubstrings(string);

  if (string.length % 2 !== 0) {
    substrings[substrings.length - 1] += '_';
    return substrings
  }

  return substrings;
}


console.log(solution("abcdef"))//, ["ab", "cd", "ef"]);
console.log(solution("abcdefg"))//, ["ab", "cd", "ef", "g_"]);
console.log(solution(""))//, [])) //;