function repeat(string, times) {
  if (typeof times !== 'number' || times < 0 || !Number.isInteger(times)) {
    console.log(undefined);
  }

  if (times === 0) {
    console.log("");
  }

  let result = '';

  for (let counter = 1; counter <= times; counter++) {
    result += string;
  }

  console.log(result);
}


repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined