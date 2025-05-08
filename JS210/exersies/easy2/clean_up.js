function cleanUp(string) {
  let result = ''
  
  for (let index = 0; index < string.length; index++) {
    currentChar = string[index];
    nextChar = string[index + 1];

    if (currentChar.match(/[a-zA-Z0-9]/)) {
      result += currentChar;
    } else {
      if (result[result.length - 1] !== ' ') {
        result += ' ';
      }
    }
  }

  console.log(result);
}



cleanUp("---what's my +*& line?");    // " what s my line "