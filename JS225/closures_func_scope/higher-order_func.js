// [1, 2, 3, 4, 5].forEach(function(number) {
//   console.log(number);
// })

// function helloFactory() {
//   return function(name) {
//     console.log(`Hello, ${name}`);
//   }
// }

// let hi = helloFactory();
// hi('bill');


function timed(func) {
  return function() {
    let start = new Date();
    func();
    let stop = new Date();
    console.log((start - stop).toString() + 'ms have elapsed')
  }
}

let timedHi = timed(function() {console.log('Hi')});
timedHi;

timedHi();

console.log(timed);

function loopy() {
  let sum = 0;
  let i;

  for (i = 1; i <= 1000000000; i += 1) {
    sum += i;
  }

  console.log(sum);
}

loopy();

timed(loopy)();

