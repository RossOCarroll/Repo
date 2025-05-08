
// function logMultiples(num) {
//   for (let counter = 100; counter >= 0; counter -= 1) {
//     if (counter % 2 !== 0 && counter % num === 0) {
//       console.log(counter);
//     }
//   }
// }


function logMultiples(num) {
  let largestMultiple = Math.floor(100 / num) * num;

  for (let counter = largestMultiple; counter >= 0; counter -= num) {
    if (counter % 2 === 1) {
      console.log(counter)
    }
  }
} 

console.log(logMultiples(17));
console.log(logMultiples(21));