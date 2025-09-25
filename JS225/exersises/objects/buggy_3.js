function objectsEqual(obj1, obj2) {
  return keysEqual(obj1, obj2) && valuesEqual(obj1, obj2);
}

function keysEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1).sort();
  let keys2 = Object.keys(obj2).sort();

  if (keys1.length !== keys2.length) return false;

  return keys1.every((key, index) => key === keys2[index])
}

function valuesEqual(obj1, obj2) {
  let keys = Object.keys(obj1);

  return keys.every(key => obj1[key] === obj2[key])
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false