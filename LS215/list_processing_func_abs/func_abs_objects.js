// let myObject = { a: 1, b: 2, c: 3 };

// Object.keys(myObject).forEach(key => {
//   console.log(`key: ${key} value ${myObject[key]}`);
// })

// function doubleObjectValues(object) {
//   let objEntries = Object.entries(object);
//   let objMapped = objEntries.map(([key, value]) => [key , value * 2]);

//   return Object.fromEntries(objMapped);
// }

// console.log(doubleObjectValues({ a: 1, b: 2, c: 3 })); // { a: 2, b: 4, c: 6 }

// function keepEvenValues(object) {
//   let objEntries = Object.entries(object);
//   let filteredVals = objEntries.filter(([key, value]) => value % 2 === 0);

//   return Object.fromEntries(filteredVals);
// }

// console.log(keepEvenValues({ a: 1, b: 2, c: 3 })); // { b: 2 }

function getTotalFromInvoice(obj) {
  let values = Object.values(obj);
  let total = values.reduce((acc, num) => acc + num, 0);

  return {total: total};
}

console.log(getTotalFromInvoice({ phone: 10000, internet: 8000, tax: 3000 })); // { total: 21000 }