/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters


Input:
  - A string that is camel case
Output:
  - a new string that is kababize case

Requirements:
  - Kababize case is where words are separated by '-' and is all lower case
  - Also does not have numerical digits

Questions:
  - Will the input string be empty?
  - Will there always be one argument a string?


Data structure:
  - Create a result string 
  - Sanitize the input string replacing any numbers
  - Iterate over the input string
    - If the char is equal to the char to upper case
      - append - and char
    - else
      - append char
  - If the string starts with '-'
    - slice the string from index 1
  - return the string downcase


*/

function kebabize(string) {
  let result = '';
  string = string.replace(/\d/g, '');

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (char === char.toUpperCase()) {
      result += '-' + char;
    } else {
      result += char;
    }
  }

  if (result.startsWith('-')) {
    result = result.slice(1);
  }

  return result.toLowerCase();
}


console.log(kebabize('MyCamelCasedString'))//, 'my-camel-cased-string'],
console.log(kebabize('myCamelCasedString'))//, 'my-camel-cased-string'],
console.log(kebabize('MyCamelHas3Humps'))//, 'my-camel-has-humps'],
console.log(kebabize('myCamelHas3Humps'))//, 'my-camel-has-humps'],
console.log(kebabize('CAMEL'))//, 'c-a-m-e-l'],
console.log(kebabize('cAMEL'))//, 'c-a-m-e-l'],
console.log(kebabize('AbstractSingletonProxyFactoryBean'))//, 'abstract-singleton-proxy-factory-bean'],
console.log(kebabize('abstractSingletonProxyFactoryBean'))//, 'abstract-singleton-proxy-factory-bean'],

