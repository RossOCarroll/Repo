/*

Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).

Examples

majorityVote(["A", "A", "B"]) ➞ "A"

majorityVote(["A", "A", "A", "B", "C", "A"]) ➞ "A"

majorityVote(["A", "B", "B", "A", "C", "C"]) ➞ null
Notes

The frequency of the majority element must be strictly greater than 1/2.
If there is no majority element, return null.
If the array is empty, return null.

Input:
  - An array of Letters
Output:
  - The letter that hold the majority in the group

Requirements:
  - The magority vote that occurs more that length / 2
  - The frequenct must be greater then half the length of the array
  - If there is ni magority element return null
  - If the array is emoty return null

Questions?
  - Will the input array always be letters?
  - Will ther array ever be a sparse array?
  - Will the function Always take one argument?
  - Will ther argument always be an array?
  - Will the array always be even?

Data Structure:
  - To organize the elements and their counts will use an object

Algorithm:
  - Create an empty object
  - Make the input array uniq
  - Iterate over each element in the unique array
    - For each element count how many times it occurs in the input array
      - Add to the counts objects the element as the value and the count ass the key
  - Get the largest count
  - If the count is greater then the input array's length return the Element
  - Else return null

*/

function getCount(array, ele) {
  let count = 0

  array.forEach(letter =>{
    if (letter === ele) {
      count++;
    }
  })

  return count;
}

function majorityVote(array) {
  if (array.length === 0) return null;
  let uniqArr = [...new Set(array)];
  let counts = {};

  uniqArr.forEach(ele => {
    counts[ele] = getCount(array, ele)
  })

  let largestCount = Math.max(...Object.values(counts));

  if (largestCount > (array.length / 2)) {

    for (let prop in counts) {
      if (counts[prop] === largestCount) {
        return prop;
      }
    }
  }

  return null;
}

majorityVote(["A", "A", "B"]) 
//➞ "A"

majorityVote(["A", "A", "A", "B", "C", "A"]) // 'A'
majorityVote(['Z', 'Z', 'Z', 'Z', 'Z', 'X', 'X', 'X']) // 'Z' 


majorityVote(["A", "B", "B", "A", "C", "C"]) 
//➞ null
majorityVote([]);