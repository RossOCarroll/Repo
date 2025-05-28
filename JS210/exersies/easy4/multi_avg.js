function showMultiplicativeAverage(array) {
  let product = array.reduce((total, number) => total * number, 1);
  let multiAvg = (product / array.length).toFixed(3);

  console.log(multiAvg);
}
 



showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"