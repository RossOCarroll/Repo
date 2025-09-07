/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""


Input: 
  - A string with letters and #
Output:
  - A new string with # representing back spaces 

Requirements:
  - We have to produce a new string with the approrate amount of back spaces
  - We can get a empty string as an input

Questions:
  - will we receive an input other then a string?

data structure:
  - Use an array to store the elements and pop them accordingly

Algorithm:
  - Create an empty array
  - Iterate over the input string
    - If the current element is "#"
      - remove the last element in the array
    - else 
      - append current element to array
  - Join array and Return

*/


function cleanString(string) {
  let cleanString = [];

  string.split('').forEach(char => {
    if(char === '#') {
      cleanString.pop();
    } else {
      cleanString.push(char);
    }
  })

  return cleanString.join('');
}


console.log(cleanString('abc#d##c'))//, "ac")
console.log(cleanString('abc####d##c#'))//, "" )
