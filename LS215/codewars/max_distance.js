/*
The function is given a string consisting from "0", "1" characters. The string represents a parking area:

"1" - the slot is occupied,
"0" - the slot is vacant.
Find a vacant slot such that it has the maximum distance from an occupied one. It can be at the ends of the area or between two "1"s. Return the maximum distance as integer.

Examples

maxDistance("01") ➞ 1
// Only the first slot is vacant. Take it. The distance is 1.

maxDistance("100") ➞ 2
// Take the last slot on the right. The distance is 2.

maxDistance("100000101") ➞ 3
// Take the slot at index 3. The distance is 3.

maxDistance("000010000001001") ➞ 4
// Take the slot at index 0. The distance is 4.
// The other possible slots at indices 7, 8 have distance 3.


Input:
  - A string of 1s and 0s
Output:
  - The index of the max distance from the occupied spot

Requirements:
  - 0 denotes empty cparking space and the 1 denotes an occupied space we need to find the empty space that is
   - furthest from ani 1
  - Find all the indexes of 1
  000010000001001    ones 4 11 14
  0123456789 10 11 12 13 14
  4321 12321

*/