function multiplyList(arr1, arr2) {
  let newArray = [];

  for (let index = 0; index < arr2.length; index++) {
    let product = arr1[index] * arr2[index];
    newArray.push(product);
  }

  console.log(newArray);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
