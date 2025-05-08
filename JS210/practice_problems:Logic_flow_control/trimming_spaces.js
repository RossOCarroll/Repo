function trim(input) {
  let result = '';
  let trigger = false;

  for (let index = 0; index < input.length; index++) {
    let char = input[index];

    if (!trigger && char === ' ') {
      continue; // skip leading spaces
    }

    if (char !== ' ') {
      trigger = true;
    }

    if (trigger) {
      result += char;
    }
  }

  let end = result.length - 1;
  while (end >= 0 && result[end] === ' ') {
    end--;
  }

  console.log(result);
}


trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""