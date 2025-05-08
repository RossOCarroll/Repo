function findFibonacciIndexByLength(num) {
  fibSeq = [1n, 1n]

  while (fibSeq[fibSeq.length - 1].toString().length < num) {
    currentNum = fibSeq[fibSeq.length - 2] + fibSeq[fibSeq.length - 1];
    fibSeq.push(currentNum);
  }

  console.log(BigInt(fibSeq.length));
}



findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.