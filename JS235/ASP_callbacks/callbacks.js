function washLaundry(afterLaundry) {
  console.log("Putting clothes in wash.");
  console.log("Adding soap.");

  console.log("Washing laundry..."); // This, along with `setTimeout`
  setTimeout(() => {                 // represents our async operation
    console.log("Buzz!");
    afterLaundry();                  // `afterLaundry` won't be invoked
  }, 5000)                           // until 5 seconds have elapsed
}

function bakeCookies(afterCookies) {
  console.log("Mixing ingredients.");
  console.log("Scooping cookie dough.");
  console.log("Putting cookies in oven.");
  
  console.log("Baking...");
  setTimeout(() => {
    console.log("Beep!");
    afterCookies();
  }, 3000)
}

function doChores() {
  console.log("Starting the chores...");

  washLaundry(function () {                // Callback will only be invoked
    console.log("Folding Laundry.");       // *after* the washing has completed
    console.log("Putting away Laundry.");
  });

  bakeCookies(function () {                // Callback will only be invoked
    console.log("Cooling cookies.");       // *after* the cookies are baked
    console.log("Eating cookies.");
  });
}

doChores();