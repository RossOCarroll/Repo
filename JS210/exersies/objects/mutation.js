let array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
let array2 = [];

// for (let i = 0; i < array1.length; i += 1) {
//   array2.push(array1[i]);
// }

array2 = array1

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);


// The following will output [
//   'Moe',     'Larry',
//   'Curly',   'Shemp',
//   'Harpo',   'Chico',
//   'Groucho', 'Zeppo'
// ]
// this is because the elements in the array are string primitive and are immutable.