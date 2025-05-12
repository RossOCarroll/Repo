function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

console.log(productOfSums([1, 2, 3], [1, 2, 3]));

// the variable sum was declared in the total function but was not assigned to anything. Also
// the total function does not return the sum variable.