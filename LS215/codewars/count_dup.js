/*

Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0  # no characters repeats more than once
"aabbcde" -> 2  # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1  # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2  # 'a' and '1'
"ABBA" -> 2  # 'A' and 'B' each occur twice



Input:
  - A string of characters
Output:
  - A number representing the number of duplicate chars in the string

Requirements:
  - Should be case insensitive
  - Will contian alphabetic characters and numbers
  - If string is empty return 0


Questions:
  - Will we get an argument that is not a string?
  - 


Data structure
  - Store duplicates in an string or array 

Algorithm
  - Create a duplicate var 
  - Iterate over string
    - If the string has more the one accurance and is not included in duplicates add to the duplicates
      - Add curent char to the duplicates
  - return the length of duplicates




*/


function countChar(char, string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (char === string[i]) {
      count++;
    }
  }
  return count > 1;
}

function duplicateCount(string) {
  if (string.length < 1) return 0;
  string = string.toLowerCase();
  let duplicates = '';

  for (let i = 0; i < string.length; i++) {
    if (countChar(string[i], string) && !duplicates.includes(string[i])) {
      duplicates += string[i];
    }
  }

  return duplicates.length;
}


console.log(duplicateCount(""))//, 0);
console.log(duplicateCount("abcde"))//, 0);
console.log(duplicateCount("aabbcde"))//, 2);
console.log(duplicateCount("aabBcde"))//, 2,"should ignore case");
console.log(duplicateCount("Indivisibility"))//, 1)
console.log(duplicateCount("Indivisibilities"))//, 2, "characters may not be adjacent")