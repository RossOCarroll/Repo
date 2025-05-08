let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// line 2 the variable `a` is declared and assgined to the object [1, 2, 3]. line 7 the myValue function
// is declared and `a` is passed in as an argument. The myValue function has a parameter
// b which is assigned to the object that `a` points to. Line 4 `b[2] += 7` will reassign the 
// the element at 2 index to that element incremented by 7. When we log a to the console
// we get [1, 2, 10] this is because the array object is mutalable and we preform a destructive
// operation on line4.