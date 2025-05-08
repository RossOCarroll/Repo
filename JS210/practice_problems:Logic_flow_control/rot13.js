function rot13(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let code = string.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(((code - 65 + 13) % 26) + 65);
    }
    else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(((code - 97 + 13) % 26) + 97);
    }
    else {
      result += char;
    }
  }

  return result;
}
console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.