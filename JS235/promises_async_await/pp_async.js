// function downloadFile() {
//   console.log("Downloading file...");

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Download complete!");
//     }, 1500);    
//   })
// }

// async function asyncDownloadFile() {
//   let data = await downloadFile();
//   console.log(`Status: ${data}`)
// }

// asyncDownloadFile()


// function processDataPromise(numbers, callback) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const processed = numbers.map(callback);
//       resolve(processed);
//     }, 1000);
//   });
// }

// async function processNTimes(array, callback, n) {
//   let newArray = array;

//   for (let i = 0; i < n; i++) {
//     newArray = await processDataPromise(newArray, callback);
//     console.log(newArray)
//   }
// }



// // Example usage:
// const squareIt = (n) => n * n;
// processNTimes([1, 2, 3], squareIt, 3);
// // After 3 seconds, logs: [1, 256, 6561]

function gettingDressed() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Getting dressed')
    }, 5000)
  })
};

function brushTeeth() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Brushing Teeth')
    }, 3000)
  })
}

function ready() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('I am Ready!')
    }, 5000)
  })
}

async function getReady() {
  console.log('Good mourning');
  console.log('Petting Cat..');
  console.log(await gettingDressed());
  console.log(await brushTeeth());
  console.log(await ready());
}

async function makeCoffee() {
  console.log('Starting coffee pot...');

  await new Promise((resolve) => setTimeout(resolve, 6000));

  console.log('Coffee Ready!');
}

makeCoffee();
getReady();