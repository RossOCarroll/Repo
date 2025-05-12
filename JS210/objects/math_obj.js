// function radiansToDegrees(input) {
//   return input * 180 / Math.PI;
// }

// console.log(radiansToDegrees(0.524));

// let num = -180;
// console.log(Math.abs(num));

// console.log(Math.sqrt(16777216));

// console.log(Math.pow(16, 6));

// let a = 50.72;
// let b = 49.2;
// let c = 49.86;

// console.log(Math.floor(a));
// console.log(Math.ceil(b));
// console.log(Math.round(c));


function random(min, max) {

  if (min > max) {
    let temp = max;
    max = min;
    min = temp;
  } else if (min === max) {
    return "Numbers cannot be equal"
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(random(1, 1));

