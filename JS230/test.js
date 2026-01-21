function startCounter(callback) {
  let count = 1;
  let id = setInterval(() => {
    const stop = callback(count);
    
    if (stop) {
      clearInterval(id);
    } else {
      count++
    }
  }, 1000)
}



startCounter((count) => {
  console.log(count);
  return count === 5;
});
// Logs 1, 2, 3, 4, 5, then stops