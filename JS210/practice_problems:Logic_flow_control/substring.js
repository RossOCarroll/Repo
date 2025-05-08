function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
    if (start < 0) start = 0;
  }

  if (length < 0 || isNaN(length)) {
    console.log('');
    return;
  }

  let subString = '';
  for (let idx = start; idx < start + length && idx < string.length; idx++) {
    subString += string[idx];
  }

  console.log(subString);
}


let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""