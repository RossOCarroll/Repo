function printLength(input: string | string[]): number {
  if (Array.isArray(input)) {
    return input.length
  } else {
    return input.length
  }
};


console.log(printLength("hello"));
console.log(printLength(["hello", "world"]));