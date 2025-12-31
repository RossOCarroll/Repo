// let myPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Hello')
//   }, 1000)
// });

// let thenReturnValue = myPromise.then((result) => {
//   return `The result is: ${result}`;
// });

// console.log(thenReturnValue);
// console.log(thenReturnValue);

function checkIfEmailExists(data) {
  console.log('Checking if email exisits');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000)
  })
};

function storeUserDetails(data) {
  console.log('Storing user details..');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000)
  })
}

function sendVerificationEmail(data) {
  console.log('Sending  Verification Email..');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000)
  })
};

let email = 'example@email.com';

checkIfEmailExists(email)
  .then(storeUserDetails)
  .then(sendVerificationEmail)
  .then(() => {
    console.log("User sign up is comepleted!")
  })