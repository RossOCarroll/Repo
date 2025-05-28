function halvsies(array) {
  let halfPoint = Math.round(array.length / 2);
  let firstHalf = array.slice(0, halfPoint);
  let secondHalf = array.slice(halfPoint, array.length)

  console.log([firstHalf, secondHalf]);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]