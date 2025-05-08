const nums = {
  '0': 0, 
  '1': 1, 
  '2': 2, 
  '3': 3, 
  '4': 4, 
  '5': 5, 
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
}

function stringToInteger(input) {
  let result = 0
  let arr = input.split('');

  arr.forEach(ele => {
    if (nums.hasOwnProperty(ele)) {
      result = result * 10 + nums[ele];
    }
  });

  if (arr[0] === '-') {
    return (result * -1)
  } else {
      return result;
  }
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570')); 
console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('-570'));      // -570
console.log(stringToInteger('+100'));      // 100