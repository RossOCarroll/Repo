/*

A pangram is a sentence that contains every letter of the alphabet at least once, regardless of case.
Write a function that checks if a given string is a pangram.

Input:
  - A string of letters
Output:
  - A boolean weather the string is a pangram

Requirements:
  - A Pangram contains ever letter in the alphabet
  - Case is ignored
  - Ignore non aphabetic characters
  - Create an alphabet and remove letters from the alphabet as we iterate over the string

Questions:
  - Will we always get a string as an input


Data structure:
  -

Algorithm:
  - Create an alphabet array
  - Down case the input string
  - Iterate over the input array
    - For each character filter out the current charavter in the alphabet array
  - If the filteralphabet has any chars left return false

*/

function isPangram(text) {
  text = text.toLowerCase().replace(/[^A-Za-z]/g, '');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let filtered = alphabet.filter(letter => text.includes(letter));

  console.log(filtered.length === 26);
}


isPangram("The quick brown fox jumps over the lazy dog")      // true
isPangram("Sphinx of black quartz, judge my vow.")            // true
isPangram("Pack my box with five dozen liquor jugs")          // true
isPangram("Hello, world!")                                    // false
isPangram("")                                                  // false
