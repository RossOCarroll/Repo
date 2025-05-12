function divideBy(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Divide by zero!"); // side effect: raises an exception
  }

  return numerator / denominator;
}

divideBy(2, 3);