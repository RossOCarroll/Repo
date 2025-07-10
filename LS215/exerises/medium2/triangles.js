/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the 
length of the longest side, and every side must have a length greater than 0. If either of these conditions 
is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the 
following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 
'invalid'.

Input:
  - 3 numbers that represents the sides of a triangle
Output:
  - A string that determines what type of triangle

Rules:
  - determine the type of triangle depending on the sides given
  - 

Questions:
  - will there always be 3 arguments
  - Will the arguments always be numbers?

Algorithm:
  - Determine if the sides given equal a valid triangle
    - Get the shortest side
    - Get the longest side
    - get the middle
      - If the shortest is less then or equal to 0
        - Return invalid
      - If the the shirtest and the middle is lest then the longest
        - Return invalid
    - If all the side are equal 
      - return "Equalateral"
    - If two sides are equal return 
      - Isosoles
    - If all the side are differen lengths
      - Retuen Salene

*/

function triangle(side1, side2, side3) {
  let sides =  [side1, side2, side3].sort();
  if (sides[0] <= 0) return 'invalid';
  if ((sides[1] + sides[0]) < sides[2]) return 'invalid';

  if (sides.every(side => sides[0] === side)) return 'equilateral';
  if (sides[0] !== sides[1] && sides[1] !== sides[2] && sides[0] !== sides[2]) return 'scalene'
  if (sides.some(side => side === sides[0])) return 'isosceles';
  
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"