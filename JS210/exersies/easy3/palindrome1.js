function isPalindrome(word) {
  let reversedWord = '';

  for (let index = (word.length - 1); index >= 0; index--) {
    reversedWord += word[index];
  }

  if (reversedWord === word) {
    console.log(true);
  } else {
    console.log(false);
  }
}






isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true


