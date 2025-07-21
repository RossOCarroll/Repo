/*
Take two objects with similar key values and combine them into a new object summing any values that belong to 
the same category.

There's a married couple, Hank and his spouse Sheila. Hank works at a power plant making $70,000 a year, and 
Sheila is a teacher making $40,000 a year. They both earn rental income from separate rental properties, 
Hank will get $12,000 and Sheila $10,000. The new object will show their separate income but combine the 
rental income because it fits the same category.

Input:
  - 2 objects keys and values as numbers
Output:
  - One object combining the numbers of the same keys

Requirements:
  - The input objects wont have the same number of key value pairs
  - If the key is the same combine sum the two values

Questions:
  - Will there be any empty obejects input?
  - Will we always recieve two arguments? one? none?

data Structure:
  - I want to creat a object to combine both objects

Algorithm:
  - Declare a combined object
  - Iterate over both input objects
    - If the keys are equal
      - add the value 1 + value2 to the combined object
    - else
      - add user 1 key, value
      - add user2 key, value
  - order the combined object by values
  - Return combined
*/

function combine(user1, user2) {
  let combined = {};

  for (let key in user1) {
    if (user2.hasOwnProperty(key)) {
      combined[key] = user1[key] + user2[key];
    } else {
      combined[key] = user1[key];
    }
  }

  for (let key in user2) {
    if (!combined.hasOwnProperty(key)) {
      combined[key] = user2[key];
    }
  }

  let sorted = Object.fromEntries(
    Object.entries(combined).sort((a, b) => a[1] - b[1])
  );

  return sorted;
}




const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}

console.log(combine(user1, user2));
// becomes ➞ {
//   powerPlant: 70000,
//   teaching: 40000,
//   rental: 22000   // The rental income is added together.
// }

const user3 = {
  powerPlant: 70000,
  sideWork: 4000, 
  rental: 18000
}

const user4 = {
  teaching: 40000,
  rental: 10000
}

console.log(combine(user3, user4));