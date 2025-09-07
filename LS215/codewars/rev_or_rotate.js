/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str == "" return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:

("123456987654", 6) --> "234561876549"
("123456987653", 6) --> "234561356789"
("66443875", 4) --> "44668753"
("66443875", 8) --> "64438756"
("664438769", 8) --> "67834466"
("123456779", 8) --> "23456771"
("", 8) --> ""
("123456779", 0) --> "" 
("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".


Input:
  - a string of digits
  - A integer that represents the size of a substring
Output:
  - If the sum of the substrings is divisiable by 2 reverse the substring if not rotate the substring to
    the left by one position

Requirements:
  - if the integer input is l;ess then or equal to 0 then return an empty string
  - if the integer is greater then the length of the input string return an empty string

ex of rotating
s = "123456" gives "234561".

index 0 goes to the back of the string

Data structure:
  - get the sub strings 
  - Use an array to get the sum

Algorithm:
  - Get the sub strings 
    - slice the string from index 0 then increment by input num
      - If substring length is equal to num 
        - Add that substring to substrings
  - Iterate over the substrings
    - Get the sum of digits
      - If the sum is divisable by 2
        - split and revers the string 
      - Else
        - Slice the string from then index 1 and concat with the string at index 0
  - Join substrings together and return
*/

function getSubStrings(string, size) {
  let subStrings = [];

  for (let i = 0; i < string.length; i += size) {
    let subString = string.slice(i, i + size);
    if (subString.length === size) {
      subStrings.push(subString);
    }
  }
  return subStrings;
}



function revOrRotate(digits, num) {
  if (num <= 0 || num > digits.length) return '';
  let subStrings = getSubStrings(digits, num);
  
  let result = subStrings.map(subString => {
    let sum = subString
      .split('')
      .map(digit => Number(digit))
      .reduce((acc, num) => acc + num);
    if (sum % 2 === 0) {
      return subString.split('').reverse().join('');
    } else {
      return subString.slice(1) + subString[0];
    }
  })

  return result.join('');
}




console.log(revOrRotate("123456987654", 6))// --> "234561876549"
console.log(revOrRotate("123456987653", 6))// --> "234561356789"
console.log(revOrRotate("66443875", 4))// --> "44668753"
console.log(revOrRotate("66443875", 8))// --> "64438756"
console.log(revOrRotate("664438769", 8))// --> "67834466"
console.log(revOrRotate("123456779", 8))// --> "23456771"
console.log(revOrRotate("", 8))// --> ""
console.log(revOrRotate("123456779", 0))// --> "" 
console.log(revOrRotate("563000655734469485", 4))// --> "0365065073456944"