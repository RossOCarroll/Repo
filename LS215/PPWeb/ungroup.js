/*
You volunteered to help out teaching a preschool in your area! You were given an array of all students and 
some important data about them, grouped by their teacher. Create a function that will ungroup every student 
so you can look at their details individually.

Input: A array of nested objects
Output: A an array of objects with the sutdents ungrouped from the teacher

Rules:
  - Take the input array where students are grouped by teacher and return an array where students
    have their own object with teacher, name and other info
  - 

Questions:
  - Will there always be a array input?
  - Will an empoty array be input?
  -

Data structure:
  - Array with nested objects

Algorithm:
  - Create a result array
  - Create a student object



*/

function ungroupStudents(array) {
  let result = [];

  array.forEach(ele => {
    ele['data'].forEach(data => {
     let studentObj = { teacher: ele['teacher']};

      for (let prop in data) {
        studentObj[prop] = data[prop];
      }
      result.push(studentObj);
    })
  })
  return result;
}

ungroupStudents([
{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergenceNumber: "617-771-1082",
  }, {
     name: "Alice",
     alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]) 
// ➞ [{
//   teacher: "Ms. Car",
//   name: "James",
//   emergencyNumber: "617-771-1082",
// }, {
//   teacher: "Ms. Car",
//   name: "Alice",
//   alergies: ["nuts", "carrots"],
// }, {
//   teacher: "Mr. Lamb",
//   name: "Aaron",
//   age: 3,
// }]