/*
In recreational mathematics, a square array of numbers, usually positive integers, is called a magic square if 
the sums of the numbers in each row, each column, and both main diagonals are the same.

Create a function that takes a square 2D array as an argument and returns a Boolean (if it is: true, if it 
isn't: false).

Examples

isMagicSquare([
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
]) ➞ true

isMagicSquare([
  [16, 3, 2, 13],
  [5, 10, 11, 8],
  [9, 6, 7, 12],
  [4, 15, 14, 1]
]) ➞ true

isMagicSquare([
  [1, 14, 14, 4],
  [11, 7, 6, 9],
  [8, 11, 10, 5],
  [13, 2, 3, 15]
]) ➞ false


Input:
  - a 2d array of numbers
Output:
  - True or fal;se depending on if the numbers are a perfect square

Requirement:
  - For the 2d array to be magic square the sum of the column, rows and both diaganols has to equal the same
  - The numbers will always be positive integers

Questions:
  - Will we always recaive a 2d array?
  - Will the array ever be empty?
  - Will there be a

Data Structure:
  - Create arrays of of the rows col, and diag

Algorithm:
  - Check if all the rows are equal
  - Check if all the columns are equal
  - Check if the diagonals are equal
    - Ifterate through the 2d array




*/

function rowsEqual(square) {
  let sums = []; 

  square.forEach(row => {
    sums.push(row.reduce((acc, num) => {
      return acc + num
    }))
  })
  return sums.every(sum => sum === sums[0]);
}

function colsEqual(square) {
  let sums = [];
  let col = 0;

  while (col < square[0].length) {
    nums = []
    for (let row = 0; row < square.length; row++) {
      nums.push(square[row][col])
    }
    sums.push(nums.reduce((acc, num) => {
      return acc + num;
    }))
    col++;
  }

  return sums.every(sum => sum === sums[0]);
}

function diagonalEqual(square, rowSum) {
  let diagonals = [];

  for (let i = 0; i < square.length; i++) {
    diagonals.push(square[i][i]);
  }

  let sum = diagonals.reduce((acc, num) => {
    return acc + num;
  })

  return rowSum === sum;
}

function revDiagonalEqual(square, rowSum) {
  let diagonals = [];
  let row = 0;

  for (let i = square[0].length - 1; i >= 0; i--) {
    diagonals.push(square[row][i]);
    row++;
  }

  let sum = diagonals.reduce((acc, num) => {
    return acc + num;
  })

  return rowSum === sum;
}

function isMagicSquare(square) {
  if (!rowsEqual(square)) return false; 
  if (!colsEqual(square)) return false;

  let rowSum = square[0].reduce((acc, num) => {
    return acc + num;
  })
  
  if (!diagonalEqual(square, rowSum)) return false;
  if (!revDiagonalEqual(square, rowSum)) return false;

  return true;
}




console.log(isMagicSquare([
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
])) //➞ true

console.log(isMagicSquare([
  [16, 3, 2, 13],
  [5, 10, 11, 8],
  [9, 6, 7, 12],
  [4, 15, 14, 1]
])) //➞ true

console.log(isMagicSquare([
  [1, 14, 14, 4],
  [11, 7, 6, 9],
  [8, 11, 10, 5],
  [13, 2, 3, 15]
])) //➞ false

// 1. Classic 3×3 Magic Square
console.log(isMagicSquare([
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2]
])); // true

// 2. Another valid 3×3
console.log(isMagicSquare([
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
])); // true

// 3. Valid 4×4 Magic Square
console.log(isMagicSquare([
  [16, 2, 3, 13],
  [5, 11, 10, 8],
  [9, 7, 6, 12],
  [4, 14, 15, 1]
])); // true

// 4. Row fails (second row sum different)
console.log(isMagicSquare([
  [8, 1, 6],
  [3, 5, 10],
  [4, 9, 2]
])); // false

// 5. Column fails (third column sum different)
console.log(isMagicSquare([
  [8, 1, 7],
  [3, 5, 7],
  [4, 9, 2]
])); // false

// 6. Diagonal fails
console.log(isMagicSquare([
  [8, 1, 6],
  [3, 9, 7],
  [4, 9, 2]
])); // false

// 7. Reverse diagonal fails
console.log(isMagicSquare([
  [8, 1, 6],
  [3, 5, 7],
  [5, 9, 2]
])); // false

// 8. 1×1 square
console.log(isMagicSquare([
  [5]
])); // true (trivial magic square)

// 9. Non-square array (2×3) — should be false
console.log(isMagicSquare([
  [1, 2, 3],
  [4, 5, 6]
])); // false

// 10. Large 5×5 magic square
console.log(isMagicSquare([
  [17, 24, 1, 8, 15],
  [23, 5, 7, 14, 16],
  [4, 6, 13, 20, 22],
  [10, 12, 19, 21, 3],
  [11, 18, 25, 2, 9]
])); // true
