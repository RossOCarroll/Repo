/*
A distinct string is a string that is present only once in an array.

Given an array of strings, arr, and an integer, k, return the kth distinct string present in arr. If there 
are fewer than k distinct strings, return an empty string "".

Note that the result string is the one encountered earliest in the array.

Example

Copy Code
distinctString(["d","b","c","b","c","a"], 2); // "a"

Questions:
  - Is the result the 2nd or 'kth' distinct string in the array?
  - Will there be always be an array as the first input and a number as the second?
    - What should the output be if the wrong data is input?
  - Will the input array have elements other than strings?
  - Will the second argument be a data type other than a number?
  - Are there rules on mutating the input array?
  - Will we always receive two arguments?
    - What should we do if an argument is omitted?
  - Will the Second argument ever be 0?
  - Will the second argument ever be a negative number?
  - Will the input array ever be a sparse array?
  - Will the array contain any number of elements?
  - Will the array be empty?
  - Will the strings be 1 character long?


Given an array of integers, nums, return the third largest number in the array. If the third largest number does not exist, return the greatest number.

You are not allowed to sort the array.

Example

thirdMax([3, 2, 1]); // 1

Questions:
  - Will I be able to mutate the array?
  - Will there be any input besides an array?
  - Willl there be an empty array?
  - Will all the elements be numbers?
  - will there be at least 3 elements in the array? If not what will be the output?
  - Will we always receive one argument?
  - Will the array be sparse?
  - Will the array contian any number of elements?
  - Will the array contian negative numbers? Or non integers?
  - Will the array contian NaN infinity or -infinity?
  - Will the numbers appear in any order?
  - Will there be repeated numbers?

Write a function, primeNumberPrinter, that prints all prime numbers present as substrings in a given string.


primeNumberPrinter("a4bc2k13d"); // [2, 13]

Questions:
  - will the input allways be a string? Or will other data be input?
  - Will the input string be empty?
  - will the string be any length?
  - Will the input string have any characters besides numbers and digits?
  - Will there be one argument?
  - Should I return an empty array if theres no digits in the string?
  - Will the string contian any number of characters?
  - Will two consecutive numbers be considered one number or two seperate numbers?
  - In what order should the output array be printed?
  - Will the output array only contian numbers not strings?
  - Will the input string contian negative numbers?

Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all duplicated elements removed. Treat numbers and number strings (e.g., 1 and '1') as duplicates, and keep the one that comes first in the result.

Examples

Copy Code
flattenAndUnique([]); // []
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']

Questions:
  - Will there always be a 2 dimensional array as the input?
  - Will there be more then one argument input? Will there be no arguments?
  - Will there elements in the array other than strings and numbers?
  - Will the input always be a 2 dimensional array?
  - Will i be able to mutate the array?
  - Will there be negative integers as elements in the input array?
  - Can the array be sparse?
  - Will there be any number of sub-arrays?
  - Will the sub arrays be empty?
  - Will there be objects in the sub arrays?
  - Will there be property arrays?
*/