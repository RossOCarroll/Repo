/*

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
there are no special characters used, only letters and spaces
words are separated by a single space
there are no leading or trailing spaces

'72olle 103doo 100ya' --> 'Hello good day'
'82yade 115te 103o'   --> 'Ready set go'

Input:
  - a string of letters and digits sperated by spaces 
Output:
  - A string sentence with the each word decoded

Requirements:
  - In each word the first letter is represented by its char code
  - the second and the last letter are swapped

Questions:
  - Will we get an empty string as an input?
  - Will there be an input beside a string?
  - Will there be character codes other then ones that represent the first letter
  - Is case a factor?

Data Structure:
  - Seperate the input string into an array and map over the array

Algorithm:
  - Split the string into an array
  - Map over the array
    - Create a char code var
    - Create a letters
    - Iterate over each word
      - If the current char is a digit
        - Add it the char code 
      - else 
        - Add to the letters

    - Return the char code converted into a string letter concat with word at index 1 to the end - 1 plist the last digit
    
  - Join and return

*/

function decipherThis(words) {
  let result = words.split(' ').map(word => {
    let charCode = '';
    let letters = '';
    
    word.split('').forEach(char => {
      if (char.match(/[0-9]/)) {
        charCode += char;
      } else {
        letters += char;
      }
    })

    let firstLetter = String.fromCharCode(Number(charCode));

    if (letters.length > 1) {
      letters = letters[letters.length - 1] + letters.slice(1, -1) + letters[0];
    }

    return firstLetter + letters;
  }).join(' ');

  return result;
}



console.log(decipherThis('72olle 103doo 100ya'))//, 'Hello good day');
console.log(decipherThis('82yade 115te 103o'))//, 'Ready set go');
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'))//, 'Have a go at this and see how you do');
console.log(decipherThis('65 119esi 111dl 111lw 108dvei 105n 97n 111ka'))//, 'A wise old owl lived in an oak');
console.log(decipherThis('84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp'))//, 'The more he saw the less he spoke');
console.log(decipherThis('84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare'))//, 'The less he spoke the more he heard');
console.log(decipherThis('87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri'))//, 'Why can we not all be like that wise old bird');
console.log(decipherThis('84kanh 121uo 80roti 102ro 97ll 121ruo 104ple'))//, 'Thank you Piotr for all your help');