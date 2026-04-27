function wrapInArray(input: string | number): Array< string | number > {
  return [input]
};

console.log(wrapInArray('hello'));
console.log(wrapInArray(100));

