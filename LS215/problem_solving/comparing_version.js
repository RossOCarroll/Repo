/*
To look at the steps of this problem solving approach in depth, we will work through a problem and see how to 
apply each step in the process. The problem we will look at compares software version numbers.

While version numbers often appear to be decimal numbers, they are, in fact, a convenient notation for a more 
complicated number system. The following are all legal version numbers:


1
1.0
1.2
3.2.3
3.0.0
4.2.3.0
Write a function that takes any two version numbers in this format and compares them, with the result of this 
comparison showing whether the first is less than, equal to, or greater than the second version:

If version1 > version2, we should return 1.
If version1 < version2, we should return -1.
If version1 === version2, we should return 0.
If either version number contains characters other than digits and the . character, we should return null.
Here is an example of version number ordering:


0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

Problem:
  Input: Two Version numbers (how will the data be represented)
  Output: Number 1 if version1 > version2, the number -1 us version1 is less than version2 0 if both versions are
    equal and null if there is a character other than `.` and digits.
  
  Rules:
    - a version is greater than another if the leading number of that version is greater
    - What data type will the input be represented?
      - We can assume its a string representation
    - compare each numeric component from left to right
    - valid characters are digits and '.'
    - Versions can have any number of components
    - Leading 0's are valid

Data structure:
  - It would be appropriate to convert strings and split them into arrays
  - Covert the digits to numbers for comparison
  - Return numbers
   [1, 2] [1, 0]

Algorithm:
  1. Create variables version1 and version2 and save the respective arguments
  2. Split the strings into arrays by the '.'
  3. HELPER: to validate the both versions (validateVersions)
    - Iterate over the input arrays
      - If a element in the array has a character other then a digit or '.'
        - return false
      - Return true
  4. HELPER: to iterate over each arrays and compare versions (determineHigherVersion)
    - Create a result variable and assign it to 0
    - Iterate over each elements in the arrays
      - Convert element to a number
      - Compare element array1[index] with array2[index]
        - If element at array1[index] is greater than array2[index]
          - reassign result to 1
          - break
        - If element at array2[index] is greater than array1[index]
          - reassign result -1
          - break
        - If elements are equal
          - continue
        
  5. Return 1 if version1 is greater return -1 if version2 is greater, 0 if they are equal and null if if 
    either is invalid
      - Return result of determineHigherVersion


*/

function validateVersion(version) {
  if (!/^[0-9.]+$/.test(version)) return false;

  if (version.startsWith('.') || version.endsWith('.')) return false;

  if (version.includes('..')) return false;

  return true;
}

function determineHigherVersion(version1, version2) {
  let length = version1.length > version2.length ? version1.length : version2.length

  for (let i = 0; i < length; i++) {
    let num1 = Number(version1[i] || 0);
    let num2 = Number(version2[i] || 0);
    if (num1 > num2) {
      return 1
    } else if (num2 > num1) {
      return -1
    }
  }

  return 0;
}

function compareVersions(version1, version2) {
  let versionArray1 = version1.split('.');
  let versionArray2 = version2.split('.');
  
  if (!validateVersion(version1) || !validateVersion(version2)) {
    return null;
  }

  return determineHigherVersion(versionArray1, versionArray2)
}


// console.log(compareVersion('1.2', '1.0') === 1);
// console.log(compareVersion('1.1', '1.0') === 1);
// console.log(compareVersion('1.2', '1.1') === 1);
// console.log(compareVersion('1.18.2', '1.2.0.0') === 1);
// console.log(compareVersion('13.37', '1.18.2') === 1);
// console.log(compareVersion('1.0', '1.1') === -1);
// console.log(compareVersion('1.0', '1.2.1') === -1);
// console.log(compareVersion('1.2.1.0', '1.18.2') === -1);
// console.log(compareVersion('1.18.2', '13.37') === -1);
// console.log(compareVersion('1', '1.0') === 0);
// console.log(compareVersion('1.2', '1.2.0.0') === 0);
// console.log(compareVersion('1.F', '1.2.0.0') === null);
// console.log(compareVersion('1.F', '1.2$0.0') === null);
// console.log(compareVersion('.1.0', '1.2.0') === null);
// console.log(compareVersion('1.0', '1.2..0') === null);

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1

