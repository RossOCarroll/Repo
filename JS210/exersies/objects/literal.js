const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

console.log(myObject[1]);
console.log(myObject.'a'); //  Error Because we a referce a variable 'a' that has not beeen defined.
console.log(myObject.a);