// function makeCounter() {
//   let count = 0;
//   return function() {
//     count += 1;
//     console.log(count);
//   };
// }

// let counter = makeCounter();
// console.log(counter());

// function makeCounterLogger(start) {

//   return function (num) {
//     if (num < start) {
//       for (let i = start; i >= num; i--) {
//         console.log(i);
//       }
//     } else {
//       for (let i = start; i <= num; i++) {
//         console.log(i);
//       }
//     }
//   }
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// countlog(2);


function makeList() {
  let list = [];

  return function(input) {

    if (!input && list.length === 0) {
      console.log('The list is empty.');
    } else if (!input && list.length > 0) {
      list.forEach(item => console.log(item))
    } else if (!list.find(item => item === input)) {
      list.push(input);
      console.log(`${input} added!`)
    } else if (list.find(item => item === input)) {
      let index = list.indexOf(input);
      list.splice(index, 1);
      console.log(`${input} removed!`);
    }
  }
}

let list = makeList();
list()
list('make breakfast');
list('read book');
list();
list('make breakfast');
list();