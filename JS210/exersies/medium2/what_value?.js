const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges'; 
console.log(array.length); // 3
console.log(Object.keys(array).length);

array[-2] = 'Watermelon';
console.log(array.length);
console.log(Object.keys(array).length);

// on line 4 the code will log 3.. this is because a float cannot be index in the array but instead
// adds a key value pair. line 5 will log 4 because we are calling the keys in the array abject
// and the array has 4 keys. line 8 will log 3.. this is because line 7 is adding a key value pair.
// line 9 will log 5