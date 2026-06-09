function test(n) {
  let count = 0;
  for (let i = n; i > 1; i = Math.floor(i / 2)) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }
  return count;
}
// Time: O(N * 2)
// Space: O(1)