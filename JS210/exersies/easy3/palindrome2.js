function isRealPalindrome(word) {
  let reversedWord = '';
  word = word.replace(/[^a-zA-Z0-9]/gi, '')

  for (let index = (word.length - 1); index >= 0; index--) {
    reversedWord += word[index];
  }

  if (reversedWord.toLowerCase() === word.toLowerCase()) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false