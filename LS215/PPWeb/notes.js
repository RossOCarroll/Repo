/*

Create a function that takes an array of students and returns an object representing their notes distribution. 
Keep in mind that all invalid notes should not be counted in the distribution. 
Valid notes are: 1, 2, 3, 4, 5

Input:
  - Is an array of objects that has the property notes
Output:
  - is a new object with the notes in numbers as keys and the values as the count of notes

Requirements:
  - We are taking the array of objects
  - each object has a notes that is an array of numbers
  - only valid notes are greater then 0

Questions:
  - Will ther array be empty?
  - Will there be empty object?

Data structure:
  - Ill store the 

Algorithm:
  - Create an result object
  - create an notes array
  - Loop through the input array
    - For each notes array 
      - Iterate through the note array
        - push the notes to the new notes array if its > 0
  - Iterate over the new notes array
    create a count
    - Iterate over the array again
      - increment the counter if current element === current element
  
    - Add key (ele, count) to the result object


*/

function getNotesDistribution(students) {
  let result = {};
  let notesArray = [];

  students.forEach(student =>
    student["notes"].forEach(note => {
      if (note > 0 && note < 6) notesArray.push(note);
    })
  )

  notesArray.forEach(note => {
    let counter = 0;
    notesArray.forEach(ele => {
      if (ele === note) counter++;
    })
    result[Number(note)] = counter;
  })

  return result;
}

getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
])
// ➞ {
//   5: 3,
//   3: 2,
//   2: 1
// })