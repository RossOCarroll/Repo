function century(year) {
  // Calculate the century
  let century = Math.ceil(year / 100);

  // Determine the suffix
  let suffix = 'th';
  if (century % 10 === 1 && century % 100 !== 11) {
    suffix = 'st';
  } else if (century % 10 === 2 && century % 100 !== 12) {
    suffix = 'nd';
  } else if (century % 10 === 3 && century % 100 !== 13) {
    suffix = 'rd';
  }

  // Return the result as a string with the suffix
  console.log(century + suffix);
}



century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"