// function leadingSubstrings(string) {
//   let subStrings = [];

//   for (let i = 0; i < string.length; i++) {
//     let subString = string.slice(0, i + 1);
//     subStrings.push(subString);
//   }

//   return subStrings;
// }

function leadingSubstrings(string) {
  return string.split('').map((ele, index) => {
    return string.slice(0, index + 1);
  }); 
}



console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]