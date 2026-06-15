/*

You're given an array, chars, of lowercase English letters sorted in ascending order, and a lowercase 
letter, key. Your task is to find the smallest letter in chars that is lexicographically greater than key. 
If no such letter exists, return the first letter in chars.


Input:
  - an array of letters and a single letter string literal
Output:
  - a string literal that is the smallest letter that is lexigraphically greater then the input key


Data Structure:
  - Use a binary seach to get to the result letter

Algorithm:
  - declare a left variable set to 0;
  - declare a right variable set to the length of letters - 1
  - declare a result variable
  - While left is less then or equal to right
    - declare a mid variable left + right / 2
    - If the chars[mid] > key
    - result = chars[mid]
      - right = mid - 1
    - else
      - left = mid + 1
    return result
*/

function findNextLetter(chars, key) {
  let left = 0;
  let right = chars.length - 1;
  let result;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (chars[mid] > key) {
      result = chars[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result ?? chars[0];
}


console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
// All test cases should log true.