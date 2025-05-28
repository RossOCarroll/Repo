function reverseWords(Words) {
  let splitWords = Words.split(' ');
  let result = [];

  for (let i = 0; i < splitWords.length ; i++) {
    if (splitWords[i].length >= 5) {
      result.push(splitWords[i].split('').reverse().join(''));
    } else {
      result.push(splitWords[i]);
    }
  }

  console.log(result.join(' '));
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"