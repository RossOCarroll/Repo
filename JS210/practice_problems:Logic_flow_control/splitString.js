function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  if (delimiter === '') {
    for (let i = 0; i < string.length; i++) {
      console.log(string[i]);
    }
    return;
  }

  if (!string.includes(delimiter)) {
    console.log(string);
    return;
  }

  let subString = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== delimiter) {
      subString += string[i];
    } else {
      console.log(subString);
      subString = '';
    }
  }

  if (subString !== '') {
    console.log(subString);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello