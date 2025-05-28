function sequence(num) {
  let result = [];
  let counter = 1;

  while (counter <= num) {
    result.push(counter);
    counter++;
  }

  console.log(result);
}




sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]