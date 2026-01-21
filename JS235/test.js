// Example usage:

function retryOperation(operation) {
  let tries = 2;
  if (operation.then())
}


retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() > 0.33
        ? resolve("Success!")
        : reject(new Error("Fail!"))
    )
);