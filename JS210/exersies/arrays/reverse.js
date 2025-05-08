function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) { 
    let result = [] 

    for (let index = inputForReversal.length - 1; index >= 0; index--) {
      result.push(inputForReversal[index]);
    }
    return result;
  }

  if (typeof inputForReversal === 'string' ) {
    let result = '' 
    for (let index = inputForReversal.length - 1; index >= 0; index--) {
      result += inputForReversal[index];
    }
    return result;
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]