const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
    console.log(sum)
  }

  console.log(array.length);

  return sum / array.length;
}

console.log(average(myArray));

// The output of the average function will be 10. This is because we assigned ar index -1 and
/// -2 to the array on line 2 and 3 the value of 5. These elements will be inserted into the array
// but they will not be part of the arrays length property. So when the function gathers the sum
// it will accumlate the extre 5s but the length of the property remains at 2. 20 / 2 === 10