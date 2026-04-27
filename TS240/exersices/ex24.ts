function logUnknown(input: unknown) {
  if (typeof input === 'string') {
    console.log(input);
  }
}


logUnknown('Hello');
logUnknown(234)