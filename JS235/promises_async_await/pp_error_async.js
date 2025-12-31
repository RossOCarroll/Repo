// function flakyService() {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       resolve("Operation successful");
//     } else {
//       reject("Operation failed");
//     }
//   });
// }

// async function fetchAndLogData() {
//   try {
//     console.log('Fetching Data....');
//     let data = await flakyService();
//     console.log(`Status: ${data}`);
//   } catch(error) {
//     console.log("Catching...");
//     console.error(`Error: ${error}`);
//   }
// };

// fetchAndLogData();

// function operation() {
//   return new Promise((resolve) => {
//     console.log("Operation started");
//     setTimeout(() => {
//       resolve("Operation complete");
//     }, 1000);
//   });
// }

// async function logOperation() {
//   try {
//     let status = await operation();
//     console.log(status);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log('Cleaning up resources')
//   }
// };

// logOperation();

// async function retryOperation(operationFunc) {
//   let attempts = 0;

//   async function attempt() {
//       try {
//         return await operationFunc()
//       } catch (error) {
//         if (attempts < 2) {
//           attempts++;
//           console.log(`Retry attempt #${attempts}`);
//           return attempt();
//         } else {
//           throw error;
//         }        
//       }
//   }

//   try {
//     console(await attempt());
//   } catch {
//     console.log('Operation Failed')
//   }
// }

// retryOperation(flakyService);

async function loadData() {
  try {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Data loaded");
        } else {
          reject("Network error");
        }
      }, 1000);
    })
    console.log(data);  
  } catch(error) {
    console.error("Error", error);
  }

}

loadData()