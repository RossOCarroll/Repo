function allMatches(array, regex) {
  let result = []
  array.forEach(string => {
    if (string.match(regex))
      result.push(string);
  });
  return result
} 



let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']