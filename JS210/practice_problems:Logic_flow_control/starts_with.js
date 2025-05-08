function startsWith(string, searchString) {
  let comparison = ''

  for (let index = 0; index < searchString.length; index++) {
    comparison += string[index];
  }

  console.log(comparison === searchString);
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false