const map = new Map();
let obj = { key: 'objectKey' };

// Adding entries
map.set('name', 'Bob');
map.set(42, 'Four score and seven years ago.');
map.set(null, []);
map.set(obj, 'Object Value');

// Retrieving values
console.log(map.get('name')); // Bob
console.log(map.get(42));     // Four score and seven years ago.
console.log(map.get(null));   // []
console.log(map.get(obj));    // 'Object Value'

// Checking size
console.log(map.size); // 4

// Iterating over the map
map.forEach((value, key) => {
  console.log(key, value);
});
// name Bob
// 42 Four score and seven years ago.
// null []
// { key: 'objectKey' } 'Object Value'