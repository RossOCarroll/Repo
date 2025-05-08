let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// Here is similar to the last exersie but instead the paramenter of the myValue function
// is `a` which shares the same as the global variable `a` declated on line 1. This parameter
// is variable declared at the functions scope but is a new seperate variable. We get 7 when we 
// log the varaible on line 8.