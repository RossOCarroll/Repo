/*
Given an array of seats, return the maximum number of new people which can be seated, as long as there is at least a gap of 2 seats between people.

Empty seats are given as 0.
Occupied seats are given as 1.
Don't move any seats which are already occupied, even if they are less than 2 seats apart. Consider only the gaps between new seats and existing seats.
Examples

maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]) ➞ 2
// [1, 0, 0, 1, 0, 0, 1, 0, 0, 1]

maximumSeating([0, 0, 0, 0]) ➞ 2
// [1, 0, 0, 1]

maximumSeating([1, 0, 0, 0, 0, 1]) ➞ 0
// There is no way to have a gap of at least 2 chairs when adding someone else.

Input:
  - An array of 1s and 0s
Output:
  - the number of new people that can sit down in a theater

Requirements:
  - 0 represent empty seat and 1 represent an occupied seat
  - peop can only occupy a sea if there is two emoty seats next to them
    - 0,0,1,0,0 
    - 1, 0 0 begining of array
    - 0 0 1 end of array

Questions:
  - Will we always get an array as a input?
  - Will the elements in the array always be 1 or 0


Data Structure:
  0 Create a counter and iterate over the array

Algorithm:
  - Create a counter
  - Iterate over the array
    - get the seats to the left 
      - slice the arr from index - 2 
    - right 
      - slice the arr form index , index + 2
    - If the left or right is false and left or righ is [0, 0]
      - increment the counter
    - If the left and righ is equal to [0, 0]
      - increment the counter
  - return counter

*/

function freeSeats(seats) {
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] !== 0) {
      return false
    }
  }

  return true;
}

function maximumSeating(seats) {
  let avalSeats = 0;

  for (let index = 0; index < seats.length; index++) {
    if (seats[index] !== 0) continue;

    let left = seats.slice(index - 2, index);
    let right = seats.slice(index, index + 2);

    if (freeSeats(left) && freeSeats(right)) {
      avalSeats++
      seats[index] = 1;
      index += 2
    }
  }

  return avalSeats;
}

console.log(maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0])) //➞ 2
// [1, 0, 0, 1, 0, 0, 1, 0, 0, 1]

console.log(maximumSeating([0, 0, 0, 0])) //➞ 2
// [1, 0, 0, 1]

console.log(maximumSeating([1, 0, 0, 0, 0, 1])) //➞ 0
// There is no way to have a gap of at least 2 chairs when adding someone else.
