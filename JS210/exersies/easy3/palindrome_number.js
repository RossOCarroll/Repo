function isPalindromicNumber(num) {
  num = String(num);
  let reversedNum = num.split('').reverse().join('');

  if(num === reversedNum) {
    console.log(true);
  } else {
    console.log(false)
  }
}






isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true