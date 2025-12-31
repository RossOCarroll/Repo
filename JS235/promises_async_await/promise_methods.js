// function fetchData(data, delay) {
//   console.log("Fetching data...");
//   return new Promise(resolve => setTimeout(() => {
//     console.log(`Resolved promise with data: ${data}`);
//     resolve(data);
//   }, delay));
// }


// async function fetchAll() {
//   const dataItems = ['foo', 42, 'Hello, world!'];
//   const delays = [1500, 500, 2300];

//   // Create an iterable of our promises without pausing execution
//   const promises = dataItems.map((data, i) => fetchData(data, delays[i]));

//   const results = await Promise.all(promises);  // `await` the promise returned by `Promise.all`
//   console.log(`All data fetched: ${results}`);
// }

// fetchAll();

// let p = new Promise((resolve, reject) => {
//   let value = Math.random();
//   if (value < 0.75) {
//     resolve(value);
//   } else {
//     reject(value);
//   }
// });

// async function showResult(p) {
//   try {
//     console.log(`In range: ${p}`)
//   } catch (error) {
//     console.log(`Out of range: ${error}`);
//   }
// }

// showResult(p);
async function foo() {
  console.log("A");
  await Promise.resolve("B");
  console.log("C");
}

foo().then(() => console.log("D"));