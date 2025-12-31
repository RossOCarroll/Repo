// function flakyService() {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       resolve("Operation successful");
//     } else {
//       reject("Operation failed");
//     }
//   });
// }

function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data loaded");
      } else {
        reject("Network error");
      }
    }, 1000);
  });
}

// let flakingPromise1 = flakyService();
// let flakingPromise2 = flakyService();
// let data1 = loadData();

// Promise.all([flakingPromise1, flakingPromise2, data1]).then(results => {
//   console.log(results);
// }).catch(() => {
//   console.error('One or more failed');
// })

// const firstResource = new Promise((resolve) =>
//   setTimeout(() => resolve("First resource loaded"), 500)
// );
// const secondResource = new Promise((resolve) =>
//   setTimeout(() => resolve("Second resource loaded"), 1000)
// );

// Promise.race([firstResource, secondResource]).then((result) => {
//   console.log(result);
// })

// const services = [flakyService(), flakyService(), flakyService()];

// Promise.any(services)
//   .then((result) => {
//     console.log(`First successful service result: ${result}`);
//   })
//   .catch((error) => {
//     console.error("All services failed:", error);
//   });


function timeoutPromise(promise, time) {
  
}

timeoutPromise(loadData(), 500)
  .then(console.log)
  .catch(console.error);
// Expected output: "Operation timed out" (because it exceeds 500ms)