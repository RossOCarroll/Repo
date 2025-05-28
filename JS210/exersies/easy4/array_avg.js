function average(array) {
  let average = array.reduce((total, num) => total + num, 0) / array.length;

  console.log(Math.floor(average));
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40