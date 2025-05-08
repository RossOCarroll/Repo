function average(array) {
  let total = sum(array);
  return total / array.length;
};


function sum(array) {
  let sum = 0;

  for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
  }
  return sum;
}


let temperatures = [56, 57, 78, 45, 67, 87];
console.log(average(temperatures));