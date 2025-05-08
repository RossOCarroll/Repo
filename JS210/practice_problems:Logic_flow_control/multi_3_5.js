// function multiplesOfThreeAndFive() {
//   let counter = 0;
//   while (counter <= 100) {
//     if (counter % 3 === 0 && counter % 5 === 0) {
//       console.log(String(counter) + '!');
//     } else if (counter % 3 === 0 || counter % 5 === 0) {
//       console.log(String(counter));
//     }
//     counter++;
//   }
// }

function multiplesOfThreeAndFive(min, max) {
  for (let counter = min; counter <= max; counter++) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      console.log(String(counter) + '!');
    } else if (counter % 3 === 0 || counter % 5 === 0) {
      console.log(String(counter));
    }
  }
}


multiplesOfThreeAndFive(20, 150);