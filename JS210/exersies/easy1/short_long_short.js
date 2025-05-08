function shortLongShort(string1, string2) {
  let stringLength1 = string1.length;
  let stringLength2 = string2.length;

  if (stringLength1 < stringLength2) {
    console.log(string1 + string2 + string1)
  } else {
    console.log(string2 + string1 + string2)
  }
}



shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"