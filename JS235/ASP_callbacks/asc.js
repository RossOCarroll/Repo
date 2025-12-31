// function logBang() { console.log('!')};
// function logWorld() { console.log('World') };

// setTimeout(logBang, 3000);
// setTimeout(logWorld, 1000);
// console.log('Hello');

// function delayLog() {
//   let count = 1;

//   while (count <= 10) {
//     const current = count;
//     setTimeout(() => console.log(current), count * 1000);
//     count++;
//   }
// }

// delayLog();

// setTimeout(() => {       // 1
//   console.log('Once');   // 5
// }, 1000);

// setTimeout(() => {       // 2
//   console.log('upon');   // 7
// }, 3000);

// setTimeout(() => {       // 3
//   console.log('a');      // 6
// }, 2000);

// setTimeout(() => {       // 4
//   console.log('time');   // 8
// }, 4000);


// setTimeout(() => { // 1
//   setTimeout(() => { // 3
//     q();
//   }, 15);

//   d();

//   setTimeout(() => { // 4
//     n(); // 6
//   }, 5);

//   z(); // 7
// }, 10);

// setTimeout(() => { // 5
//   s();
// }, 20);

// setTimeout(() => { // 6
//   f();
// });

// g(); // 2


// function afterNSeconds(callback, n) {
//   setTimeout(callback, n)
// };

// afterNSeconds(() => console.log('Hello'), 5000);

// let counterId;

// function startCounting() {
//   let count = 0;
//   counterId = setInterval(() => {
//     count += 1;
//     console.log(count);
//   }, 1000);
// }

// function stopCounting() {
//   clearInterval(counterId);
// }


console.log('Starting...')

console.log("Starting...");

const intervalId = setInterval(() => {
  console.log("Hello!");
}, 2000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Goodbye!");
}, 10000);