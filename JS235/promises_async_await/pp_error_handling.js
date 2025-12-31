// function flakyService() {
//   let rand = Math.random();

//   return new Promise((resolve, reject) => {
//     if (rand < 0.4) {
//       resolve('Operation Successful');
//     } else {
//       reject('Operation Failed');
//     }
//   })
// }

// flakyService().then(success  => {
//   console.log(success);
// }).catch(failed => {
//   console.log(failed);
// })

// let promise = new Promise((resolve) => {
//   resolve('Operation Complete')
// });

// promise.then(status => {
//   console.log(status);
// }).finally(() => {
//   console.log('File Deleted');
// });

// new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(2)
//   }, 2000)
// }).then((result) => {
//   console.log(result);
//   return (result * 2) + 5;
// }).then((result) => {
//   console.log(result);
//   return (result * 2) + 5;
// }).then((result) => {
//   console.log(result);
//   return (result * 2) + 5;
// }).then((result) => {
//   console.log(result);
// })


// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject({ error: "User not found" }), 500);
//   });
// };

// fetchUserData().catch((msg) => {
//   console.log(`Error Caught: ${msg.error}`)
// }).finally(() => {
//   console.log('Fetching complete');
// })

// Example usage:

// function retryOperation(operationFunc) {
//   let attempts = 0;

//   function attempt() {
//     return operationFunc().catch((err) => {
//       if (attempts < 2) {
//         attempts++;
//         console.log(`Retry attempt ${attempts}`);
//         return attempt()
//       } else {
//         throw err;
//       }
//     });
//   }

//   return attempt().catch(() => console.error("Operation Failed"));
// }




// retryOperation(
//   () =>
//     new Promise((resolve, reject) =>
//       Math.random() > 0.33
//         ? resolve("Success!")
//         : reject(new Error("Fail!"))
//     )
// );

// function mockAsyncOp() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve("Operation succeeded");
//       } else {
//         reject("Operation failed");
//       }
//     }, 1000);
//   });
// }

// let promise = mockAsyncOp();
// promise.then((status) => {
//   console.log(status);
// }).catch((status) => {
//   console.log(status);
// }).finally(() => {
//   console.log('Operation attempted');
// })

function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data loaded");
      } else {
        reject("Network error");
      }
    }, 1000);
  }).catch(() => {
    console.error("An error occurred. Attempting to recover...");
    // Return a recovery promise
    return Promise.resolve("Using cached data");
  });
}

loadData().then(console.log);
// Logs "Data loaded" or "Using cached data"