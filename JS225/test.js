function partial(fn, ...fixedArgs) {
  return function(...restArgs) {
    return fn(...fixedArgs, ...restArgs);
  }
}


function sum(a, b) {
  return a + b;
};

let add5 = partial(sum, 5);
console.log(add5(100));

