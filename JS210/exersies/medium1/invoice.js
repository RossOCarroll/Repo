function invoiceTotal(...args) {
  let count = 0
  for (let i = 0; i < args.length; i++ ) {
    count += args[i];

  }
  console.log(count);
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?