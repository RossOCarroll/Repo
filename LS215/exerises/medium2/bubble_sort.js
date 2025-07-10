/*
Bubble Sort' is one of the simplest sorting algorithms available. Although it is not an efficient algorithm, 
it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an 
array using the bubble sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of 
each pair of consecutive elements are compared. If the first value is greater than the second, the two e
lements are swapped. This process is repeated until a complete pass is made without performing any swaps — at 
which point the array is completely sorted.

6	2	7	1	4	Start: compare 6 > 2? Yes
2	6	7	1	4	Swap
2	6	7	1	4	6 > 7? No (no swap)
2	6	7	1	4	7 > 1? Yes
2	6	1	7	4	Swap
2	6	1	7	4	7 > 4? Yes
2	6	1	4	7	Swap
2	6	1	4	7	2 > 6? No
2	6	1	4	7	6 > 1? Yes
2	1	6	4	7	Swap
2	1	6	4	7	6 > 4? Yes
2	1	4	6	7	Swap
2	1	4	6	7	6 > 7? No
2	1	4	6	7	2 > 1? Yes
1	2	4	6	7	Swap
1	2	4	6	7	2 > 4? No
1	2	4	6	7	4 > 6? No
1	2	4	6	7	6 > 7? No
1	2	4	6	7	1 > 2? No
1	2	4	6	7	2 > 4? No
1	2	4	6	7	4 > 6? No
1	2	4	6	7	6 > 7? No
1	2	4	6	7	No swaps; all done; sorted
We can stop iterating the first time we make a pass through the array without making any swaps because this 
means that the entire array is sorted.

For further information — including pseudo-code that demonstrates the algorithm, as well as a minor 
optimization technique — see the Bubble Sort Wikipedia page.

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm 
described above. The sorting should be done "in-place" — that is, the function should mutate the array. 
You may assume that the array contains at least two elements.

Input:
  - and array of elements
Output:
  - the same array bubble sorted

Rules:
  - Return the same array with the elements bubble sorted
  - When sorting the array swap the number with the next number if the next number or element is larger
  - The process repeats itself until there has been no swaps made

questions 
  - Will there be elements besides numbers in the input array? how should we handle them?
  - Will there be an empty array input?
  - will there be always one argument? Or multiple arguments?

Algorithm
  - Declare a swapped variable
  - Create a loop until the swapped variable returns false
    - assign swapped false
    - Iterate over the input array
      - if the element at current index is less then the element at the next index 
        - [array[i], array[i+ 1]] = [array[i+ 1], array[i]
        - assign swapped to true
    - return arr

*/

function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1] , arr[i]] = [arr[i], arr[i + 1]];
        swapped = true;
      }
    }

  } while(swapped)
  
  return arr;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]