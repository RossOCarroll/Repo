function sumOfSums(numbers) {
  let sumOfNumbers = 0;

  for (let i = 0; i < numbers.length; i++) {
    let subArr = numbers.slice(0, i + 1);
    sumOfNumbers += subArr.reduce((acc, value) => acc + value);
  }

  return sumOfNumbers;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35