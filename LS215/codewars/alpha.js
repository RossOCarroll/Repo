/*

The alphabetized kata

Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") // "BbeehHilloTy"



*/

function alphabetized(string) {
  return string.replace(/[^A-Za-z]/g, '').split('').sort((a, b) =>{
    return a.toLowerCase().localeCompare(b.toLowerCase());
  }).join('');
}


console.log(alphabetized("The Holy Bible")) // "BbeehHilloTy"
console.log(alphabetized(""))// == ""
console.log(alphabetized(" "))// == ""
console.log(alphabetized(" a"))// == "a"
console.log(alphabetized("a "))// == "a"
console.log(alphabetized(" a "))// == "a"
console.log(alphabetized("A b B a"))// == "AabB"
//console.log(alphabetized(" a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G 