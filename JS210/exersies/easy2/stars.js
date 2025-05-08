function triangle(num) {
  numStars = 1;
  numWhiteSpace = num - 1;

  for (let counter = 0; counter < num; counter++) {
    row = ' '.repeat(numWhiteSpace) + '*'.repeat(numStars);
    console.log(row);
    numStars += 1;
    numWhiteSpace -= 1;
  }
}


triangle(5);
triangle(9);