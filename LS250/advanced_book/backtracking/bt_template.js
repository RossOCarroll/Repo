function someProblem(candidates) {
  function backtrack(candidates, candidate, result) {
    if (true) { /* <<success condition>> */
      result.push([...candidate]);
      return;
    }

    for (let elem of candidates) {
      if (true) {  // replace true with the dead-end condition
        continue;
      }

      candidate.push(elem);  // take
      backtrack(candidates, candidate, result);  // explore
      candidate.pop();  // clean up
    }
  }
}