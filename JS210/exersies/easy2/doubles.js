function twice(num) {
  let numToString = num.toString();
  let halfLength = numToString.length / 2;
  let first = numToString.slice(0, halfLength);
  let second = numToString.slice(halfLength);
  
  if (first === second) {
    console.log(num);
  } else {
    console.log(num * 2);
  }
}


twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676 