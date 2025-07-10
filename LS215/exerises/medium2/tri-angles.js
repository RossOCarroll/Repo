/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater 
than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four 
strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. 
You may also assume that the arguments are in degrees.


Input:
  - 3 number values that represent the angles of a triangle
Output:
  - A string that represents the type of triangle or if its valid

Rules
  - return the type of triangle as a string
  - assume that all inputs will be integers values
  - Do not worry about floating numbers

Questions 
  - Will there always be three arguments? less? More?
  - Will there inputs that are not integers?

Data Structure:
  - Use an array to store the angles
  - output a string

Algorithm:
  - create an array with the 3 angles as elements
  - Verify if the array is valid?
    - Take the sum of the array 
      - If the sum does not equal 190
        - return invalid
  - Check to see if the angles array has a the value 90
    - If true return 'Right'
  - Check to see if every element is less then 90
    - Return 'Acute'
  - Check to see if one angle is greater then 90
    - Return 'Obtuse'
*/


function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];
  let sum = angles.reduce((acc, value) => acc + value);

  if (sum !== 180 || angles.some(angle => angle === 0)) return 'invalid';

  if (angles.some(angle => angle === 90)) return 'right';
  if (angles.every(angle => angle < 90)) return 'acute';
  if (angles.some(angle => angle > 90)) return 'obtuse';

}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"