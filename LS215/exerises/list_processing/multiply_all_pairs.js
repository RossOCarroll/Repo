function multiplyAllPairs(arr1, arr2) {
  let multiplied = [];

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      multiplied.push(num1 * num2);
    })
  })

  return multiplied.sort((a, b) => a - b);
}



console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

