function toLowerCase(string) {
  let result = '';

  for (let index = 0; index < string.length; index++) {
    let char = string[index];
    let ascii = char.charCodeAt(0);

    if (ascii >= 65 && ascii <= 90) {
      ascii += 32;
      result += String.fromCharCode(ascii);  
    } else {
      result += char;
    }
    
  }

  console.log(result);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"