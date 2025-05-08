// function logOddNumbers(num) {
//   let counter = 0;
//   while (counter <= num) {
//     if (counter % 2 !== 0) { console.log(counter) };
//     counter += 1;
//   };
// }

// function logOddNumbers(num) {
//   for (let counter = 1; counter <= num; counter += 2) {
//     console.log(counter);
//   }
// }

function logOddNumbers (num) {
  let counter = 0;
  while (counter <= num) {
    counter += 1;
    if (counter % 2 === 0) {
      continue;
    } else {
      console.log(counter);
    }
  }
}



console.log(logOddNumbers(19));