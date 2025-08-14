/*

Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)

Input:
  -A string of letters
Output:
  - The longest substring that is in alphabetical order

Requirements:
  - Will need to be efficant
  - All the letters will be lower case

Algorithm:
  - Create a substring array
  - Iterate over the string
    - Iterate over the string for each char
      - If the current char is greater then or equal to the current char 
        - Add to the current substring


*/

function longest(str) {
  let substrings = [];
  let substring = str[0] || ''; 

  for (let i = 1; i < str.length; i++) {
    let currentChar = str[i];
    let previousChar = str[i - 1];

    if (currentChar >= previousChar) {
      substring += currentChar; 
    } else {
      substrings.push(substring); 
      substring = currentChar; 
    }
  }

  if (substring) substrings.push(substring); // push last one

  return substrings.reduce((a, b) => a.length >= b.length ? a : b, '');
}



console.log(longest("asdfaaaabbbbcttavvfffffdf")); // "aaaabbbbctt"