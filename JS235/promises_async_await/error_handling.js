// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("Something went wrong."));
//   }, 1000)
// });

// myPromise.catch((errorMessage) => {
//   console.log(`Error message: ${errorMessage}`);
// })

function getStatus() {
  const rand = Math.random();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rand > 0.4) {
        resolve(200);
      } else if (rand > 0.2) {
        reject(404);
      } else {
        reject(500);
      }
    }, 2000)
  })
};

// const statusPromise = getStatus();

// statusPromise.then(successCode=> {
//   console.log(`Success! status code: ${successCode}`);
// }).catch(failureCode => {
//   console.log(`Failed. Status code ${failureCode}`);
// })

// const promise = new Promise((resolve, reject) => {
//   throw new Error("oops");
// })

// promise
//   .then((result) => {
//     // not run
//   })
//   .catch((error) => {
//     console.error("Caught and error", error.message);
//   })

// doSomethingAsync()
//   .then((result) => doSomethingElseAsync(result))
//   .catch((error) => {
//     console.log("An error occurred in the first two steps:", error);
//     return fallBackValue;
//   })
//   .then((newResult) => doThirdThingAsync(newResult));

const statusPromise = getStatus();

statusPromise
  .then(
    (successCode) => console.log(`Succsess! status code: ${successCode}`),
    (failureCode) => console.log(`Failure. Status Code: ${failureCode}`)
  )