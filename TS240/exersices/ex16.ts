function firstElement<T>(arr: T[]): T | undefined {
  let firstElement = arr[0];
  if (firstElement) {
    return firstElement;
  } else {
    return undefined;
  }
}