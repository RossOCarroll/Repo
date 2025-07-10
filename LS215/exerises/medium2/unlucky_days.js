/*
Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. 
You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the 
United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

Input:
  - An integer representing the year

Output:
  - An integer represening how many fridays the 13ths are in the input year

Rules:
  - The year will be greater then 1752
  - Use the Gregorian calendar
  - Return the number of friday the 13ths for that year
  
Questions?
  - Will there be an input other then an integers?
  - Will there be more then one argument input? No arguments?

Data Structure
  - Date object
  - Integers 
  - Strings

Algorithm:
  - Grab the date object of the input year with the month starting at 0 and day of 13
  - create a counter
  - Loop through 0 - 11 (months)
    - Us the index to increment the months
      - get the day of the week
      - If the day of the week id === 5 (friday)
        - increment the counter
  - return counter

*/

// let date = new Date(1986, 1, 13);

// console.log(date.getDay() === 5);

function fridayThe13ths(year) {
  let counter = 0;
  

  for (let i = 0; i < 12; i++) {
    let date = new Date(year, i, 13)

    if (date.getDay() === 5) {
      counter++
    }
  }
  return counter;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2