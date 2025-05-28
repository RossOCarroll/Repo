function reverseNumber(num) {
  let arrayRev = String(num).split('').reverse();

  let revWord = arrayRev.map(number => Number(number)).join('');

  console.log(revWord);
}


reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1