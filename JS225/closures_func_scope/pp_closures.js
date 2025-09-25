// function makeMultipleLister(num) {
//   let counter = num;
//   return function() {
//     while (counter < 100) {
//       console.log(counter);
//       counter += num;
//     }
//   }
// }

// let lister = makeMultipleLister(13);
// lister();

// let total = 0;

// function add(num) {
//   total += num;
//   console.log(total);
// }

// function subtract(num) {
//   total -= num;
//   console.log(total);
// }

// add(1);
// add(42);
// subtract(39);
// add(6);

// function startup() {
//   let status = 'ready';
//   return function() {
//     console.log('The system is ready.');
//   };
// }

// let ready = startup();
// let systemStatus = ready()