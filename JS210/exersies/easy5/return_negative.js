// function negative(num) {
//   if (num > 0) {
//     console.log(num * -1);
//   } else if (num === 0) {
//     console.log(-0);
//   } else {
//     console.log(num);
//   }
// }

function negative(num) {
  num > 0 ? console.log(num * -1) : console.log(num);
}


negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0