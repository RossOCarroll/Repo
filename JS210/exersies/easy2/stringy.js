function stringy(num) {
  result = ''
  let trigger = '1'

  for (let counter = 0; counter < num; counter++) {
    result += trigger;
    if (trigger === '1') {
      trigger = '0';
    } else {
      trigger = '1';
    }
  }

  console.log(result);
}




stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

