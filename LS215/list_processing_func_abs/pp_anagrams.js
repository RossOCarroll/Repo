function anagram(word, list) {
  
  let anagrams = list.filter(currentWord => {
    return word.split('').sort().join('') === currentWord.split('').sort().join('');
  })

  return anagrams;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]