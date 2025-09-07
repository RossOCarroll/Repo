/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

Input:
  - A string of characters
Output:
  - A new string that is encoded with '(' ')'

Requierments:
  - Conver the character that appears only once to '(' and a charter that apears more then once to )
  - Ignore capitialization in determining
  - White space should be concidered a charavter

Questions?
  - Will we receive an empty string?
  - Will we always recieve a string?

Data structure:
  - Building a new encoded string

Algorithm
  - Create an empty string to append to
  - Helper method:  count the number of times a char appears in the text
  - Iterate over the input string
    - If current char appears once  
      - append '(' to the encoded string 
    - If the current char appears more then once
      - append ')' to the encoded string
  - Return encoded string

*/

function countChar(char, string) {
  let count = 0;

  string.split('').forEach(ele => {
    if (ele === char) count++
  })

  return count;
}


function duplicateEncode(string) {
  let encoded = '';
  string = string.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    if (countChar(string[i], string) > 1) {
      encoded += ')'
    } else {
      encoded += '('
    }
  }
 
  return encoded;
}



console.log(duplicateEncode("din"))//,"(((");
console.log(duplicateEncode("recede"))//,"()()()");
console.log(duplicateEncode("Success"))//,")())())","should ignore case");
console.log(duplicateEncode("(( @"))//,"))((");
console.log(duplicateEncode("Sassafras")) // ))))(((((
