function logInBox(string, length) {

  if (length !== undefined) {
    string = string.slice(0, length);
  }

  let topRow = '+-' + '-'.repeat(string.length) + '-+';
  let rowTwo = '| ' + ' '.repeat(string.length) + ' |';

  console.log(topRow);
  console.log(rowTwo);
  console.log('| ' + string + ' |');
  console.log(rowTwo);
  console.log(topRow);
}




logInBox('To boldly go where no one has gone before.');
logInBox('');