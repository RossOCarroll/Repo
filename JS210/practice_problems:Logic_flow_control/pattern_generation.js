function generatePattern(nStars) {
  const totalWidth = (nStars >= 10) ? (nStars * 2) - 1 : nStars;

  for (let index1 = 1; index1 <= nStars; index1++) {
    let numbers = [];
    for (let index2 = 1; index2 <= index1; index2++) {
      numbers.push(index2);
    }

    const numberStr = numbers.join('');
    const numStars = totalWidth - numberStr.length;
    const stars = '*'.repeat(numStars);
    
    console.log(numberStr + stars);
  }
}


generatePattern(9);
generatePattern(20);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567