// function runningTotal(array) {
//   let result = [];
//   let sum = 0;

//   for (let index = 0; index < array.length; index++) {
//     sum += array[index];
//     result.push(sum);
//   }

//   console.log(result);
// }


function runningTotal(array) {


  let sum = 0;

  let result = array.map(num => sum += num);

  console.log(result);
}



runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []