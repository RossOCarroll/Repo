function printId(input: number | string): string {
  if (typeof input === 'number') {
    return 'Your Id is a number';
  } else {
    return 'Your id is a string';
  }
}