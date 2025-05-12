// function objectHasProperty(obj, string) {
//   for (let key in obj) {
//     if (key === string) { return true; }
//   }

//   return false;
// }

// let pets = {
//   cat: 'Simon',
//   dog: 'Dwarf',
//   mice: null,
// };

// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true

// function incrementProperty(obj, string) {
//   if (obj.hasOwnProperty(string)) {
//     obj[string] += 1;
//   } else {
//     obj[string] = 1;
//   }
//   return obj[string];
// }

// let wins = {
//   steve: 3,
//   susie: 4,
// };

// console.log(incrementProperty(wins, 'susie'));   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy'));    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// function copyProperties(obj, copyObj) {
//   let count = 0
//   for (let key in obj) {
//     copyObj[key] = obj[key] ;
//     count++;
//   }
//   return count;
// }


// let hal = {
//   model: 9000,
//   enabled: true,
// };

// let sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }

function wordCount(string) {
  let result = {};
  let array = string.split(' ')

  for (let i = 0; i < array.length; i++) {
    let count = array.filter(item => item === array[i]).length;
    result[array[i]] = count;
  }

  console.log(result);
}



wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }