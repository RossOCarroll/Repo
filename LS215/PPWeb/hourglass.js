/*
2. Hourglass Pattern
Write a function that prints an hourglass pattern of stars (*) of size n (odd integer).

Example for hourglass(5):

*****
 ***
  *
 ***
*****

Input:
  - A number
Output:
  - An hourglass pattern of * and ' '

Rules:
  - The input will be an odd number
  - Create a loop that where the spaces start at 0 and the starts start at n
  - Loop through the first half from 1 to (n / 2) ceil
  - for ever loop decrment stars by 2 and increse spaces by one
  - for second half === (n / 2) floor
  - inrease the stars by 2 and decrement spaces by one

Questions:
  - Will there always be a number input?
  - Will it always be an odd number? greater then 1 ?
  - Will there always be one argument?

algorithm:
  - Create a spaces var assign to 0
  - Create a stars var assign to n
  - Loop the first half 1 to n / 2 rounded up
    - log to the console spaces X ' ' and stars X '*'
    - decrment stars by 2
    - incrment the spaces by 1
  - loop the second half n / 2 rounded down
    - log to the console spaces X ' ' and stars X '*'
    - increment the stars by 2
    - decrment the spaces bt 1
 
*/

function hourglass(n) {
  let stars = n;
  let spaces = 0;


  for (let i = 1; i <= Math.floor(n / 2); i++) {
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
    stars -= 2;
    spaces++;
  }

console.log(' '.repeat(spaces) + '*'.repeat(stars))

  for (let j = 1; j <= Math.floor(n / 2); j++) {
    stars += 2;
    spaces--;
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
  }
}

hourglass(5);
hourglass(3);
hourglass(11);
hourglass(21);
 