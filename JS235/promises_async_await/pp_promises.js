// function washLaundry() {
//   return new Promise((resolve) => {
//     console.log("Putting clothes in the wash.");
//     console.log("Adding soap.");
//     console.log('Washing Laundry');

//     setTimeout(() => {
//       console.log('Buzz!');
//       resolve();
//     }, 5000)
//   })
// };

// function bakeCookies() {
//   return new Promise((resolve) => {
//     console.log('Mixing Ingredients.');
//     console.log('Scooping the Cookie dough.');
//     console.log('Putting the cookies in the over.');
  
//     console.log('Baking...');
//     setTimeout(() => {
//       console.log('Beep!');
//       resolve();
//     }, 3000);
//  })
// }

// function doChores() {
//   console.log('Starting the chores..');

//   let laundryPromise = washLaundry();
//   let cookiesPromise = bakeCookies();

//   laundryPromise.then(() => {
//     console.log('Folding Laundry');
//     console.log('Putting away clothes.');
//   });

//   cookiesPromise.then(() => {
//     console.log('Cooling Cookies');
//     console.log('eating cookies');
//   });
// }

// doChores();


// function downloadFilePromise() {
//   return new Promise((resolve) => {
//     console.log("Downloading File...");
//     setTimeout(() => {
//       console.log("Download Complete");
//       resolve('file.zip');
//     }, 1500)
//   })
// };

// downloadFilePromise().then((result) => {
//   console.log(result);
// });


function processDataPromise(numbers, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processed = numbers.map(callback);
      resolve(processed);
    }, 1000);   
  }) 
}

// Example usage:
const processedData = processDataPromise([1, 2, 3], (number) => number * 2);
// After 1 second, logs: [2, 4, 6]
processedData.then((result) => {
  console.log(result);
})