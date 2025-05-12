// function penultimate(string) {
//   let array = string.split(' ');
//   return array[array.length - 2];
// }

function penultimate(string) {
  return string.split(' ').slice(-2, -1);
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"


// We are getting return values for undefined this is happening be cause a negative number
// is not a index in the array. Instead we should call the index using length - 2.