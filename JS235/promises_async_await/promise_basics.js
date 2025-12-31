// let myPromise = new Promise((resolve) => {
//   setTimeout(() => {
//    resolve('Hello'); 
//   }, 1000)
// });

// myPromise.then((result) => {
//   console.log(`Got a result: ${result}`);
// });

// console.log('Finished setting up!');

function washLaundry(afterLaundry) {
  console.log("Putting clothes in the wash.");
  console.log("Adding soap.");

  console.log('Washing Laundry');
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Buzz!');
      resolve();
    }, 5000)
  })
};

let laundryPromise = washLaundry();

laundryPromise.then(() => {
  console.log('Folding Laundry');
  console.log('Putting away clothes.');
});