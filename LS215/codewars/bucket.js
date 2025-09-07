/*
Write a function that divides a phrase into word buckets, with each bucket containing n or fewer characters. Only include full words inside each bucket.

Examples

bucketize("she sells sea shells by the sea", 10)
➞ ["she sells", "sea shells", "by the sea"]

bucketize("the mouse jumped over the cheese", 7)
➞ ["the", "mouse", "jumped", "over", "the", "cheese"]

bucketize("fairy dust coated the air", 20)
➞ ["fairy dust coated", "the air"]

bucketize("a b c d e", 2)
➞ ["a", "b", "c", "d", "e"]
Notes

Spaces count as one character.
Trim beginning and end spaces for each word bucket (see final example).
If buckets are too small to hold a single word, return an empty array: []
The final goal isn't to return just the words with a length equal (or lower) to the given n, but to return the entire given phrase bucketized (if possible). So, for the specific case of "by" the only word with a proper length, the phrase can't be bucketized, and the returned array has to be empty.

Input:
  - A string of words
  - A number
Output:
  - An array of the word strings as elements in the size of the number or less

Requirements:
  - Spaces count as a char
  - Trim the begging and end
  - If the buckets are to small to hold a single word return []

Questions:
  - Will the string only contain Lower cased letters?
  - Will a empty string be input
  - Will we get a negative number as an input?
  
Data Structure:
  - Split the string into an array of words

Algorithm:
  - Split the string into an array
  - If any word in the array is less then n return [];
  - Create a buckets array
  - Create a currentBucket string
  - Iterate over the words
    - If currentBucket is empty
      - Append word to bucket
    - else if currentBucket + word length < n
      - Add word to bucket
    - else
      - Add bucket to buckets
  - Return buckets




*/

function bucketize(string, n) {
  let words = string.split(' ');
  if (words.some(word => word.length > n)) return [];

  let buckets = [];
  let currentBucket = '';

  words.forEach(word => {
    if (currentBucket.length === 0) {
      currentBucket += word + ' ';
    } else if ((currentBucket + ' ' + word).length <= n) {
      currentBucket += ' ' + word;
    } else {
      buckets.push(currentBucket.trim());
      currentBucket = word;
    }
  })

  if (currentBucket) buckets.push(currentBucket);

  return buckets;
}


console.log(bucketize("she sells sea shells by the sea", 10))
//➞ ["she sells", "sea shells", "by the sea"]

console.log(bucketize("the mouse jumped over the cheese", 7))
//➞ ["the", "mouse", "jumped", "over", "the", "cheese"]

console.log(bucketize("fairy dust coated the air", 20))
//➞ ["fairy dust coated", "the air"]

console.log(bucketize("a b c d e", 2))
//➞ ["a", "b", "c", "d", "e"]

console.log(bucketize("Hello World", 2))