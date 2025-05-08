function missing(arr) {
  let missingNums = [];
  let end = arr[arr.length - 1];
  let start = arr[0];

  while (start < end ) {
    start += 1
    if (!arr.includes(start)) {
      missingNums.push(start);
    }
  }

  console.log(missingNums);

}



missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []