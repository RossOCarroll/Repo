function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done');
    }, ms)
  })
}

function fetchWithTimeOut(url) {
  return Promise.race([fetch(url), timeout(5000)]);
}

fetchWithTimeOut('/users').then(() => console.log('succsess'))
  .catch((error) => console.log(error))