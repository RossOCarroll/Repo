// function basicCallback(fn, time) {
//   setTimeout(() => fn(time), time);
// }


// // Example usage:
// basicCallback((number) => {
//   console.log(number * 2);
// }, 5);
// // After 2 seconds, logs: 10


// function downloadFile(callback) {
//   console.log('DownLoading File..')
//   setTimeout(() => callback(), 1500);
// };


// downloadFile( function () {
//   console.log('Downloading complete')
// }
// )

// function processData(array, callback) {
//   setTimeout(() => {
//     const newArr = array.map(number => callback(number));
//     console.log(newArr);
//   }, 1000)
// }

// processData([1, 2, 3], (number) => number * 2);

// function waterfallOverCallbacks(callbacks, num) {
//   let result = num;
//   callbacks.forEach(callback => {
//     result = callback(result);
//   })

//   console.log(result);
// }

// const double = (x) => x * 2;
// waterfallOverCallbacks([double, double, double], 1);

function startCounter(callback) {
  let count = 0;
  const id = setInterval(() => {
    count ++;

    const stop = callback(count);
    if (stop) {
      clearInterval(id);
    }
  })
}

// Example usage:
startCounter((count) => {
  console.log(count);
  return count === 5;
});
// Logs 1, 2, 3, 4, 5, then stops
