/*
Given an object literal of student names and an array of their test scores over the semester, return a list of all the students who passed the course (in alphabetical order). However, there is one more thing to mention: the pass mark is 100% in everything!

Examples

whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
}) ➞ ["Barry", "John"]

whoPassed({
  "Zara" : ["10/10"],
  "Kris" : ["30/30"],
  "Charlie" : ["100/100"],
  "Alex" : ["1/1"]
}) ➞ ["Alex", "Charlie", "Kris", "Zara"]

whoPassed({
  "Zach" : ["10/10", "2/4"],
  "Fred" : ["7/9", "2/3"]
}) ➞ []


Input:
  - An object with strucents name as the key and their scores as in an array as the value
Output:
  - An array with the students who passed their tests

Requirements:
  - A student passes if all they score 100% on all their tests
  - Each element in the scores array divided by /
  - Return an empty array if now one meets the requirements

Questions:
  - Will there always be an object input?
  - Will there be negative numbers input?

Data Structure:
  - Crrate a Students passed array to push to
  - 

Algorithm:
  - Create a sudentsPassed array
  - Iterate over the object
    - Map over the scores
      - split the scores by '/'
        - If the score[0] == score[1]
          - return true
      - If the the scores array is all true
        - Add the student name to the student passed array
  - Return the student passed array

*/

function whoPassed(students) {
  let studentsPassed = [];

  for (let student in students) {
    let passed = students[student].map(grade => {
      let scores = grade.split('/');

      if (scores[0] === scores[1]) {
        return true;
      } else {
        return false;
      }
    })
    if (!passed.some(score => !score)) {
      studentsPassed.push(student);
    }
  }
  return studentsPassed.sort();
}


console.log(whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
}))// ➞ ["Barry", "John"]

console.log(whoPassed({
  "Zara" : ["10/10"],
  "Kris" : ["30/30"],
  "Charlie" : ["100/100"],
  "Alex" : ["1/1"]
})) //➞ ["Alex", "Charlie", "Kris", "Zara"]

console.log(whoPassed({
  "Zach" : ["10/10", "2/4"],
  "Fred" : ["7/9", "2/3"]
}))//➞ []