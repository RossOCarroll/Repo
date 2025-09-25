/*
Complete the method that takes a hash/object/directory/association list of users, and find the nexus: the user whose rank is the closest or equal to his honor. Return the rank of this user. For each user, the key is the rank and the value is the honor.

If nobody has an exact rank/honor match, return the rank of the user who comes closest. If there are several users who come closest, return the one with the lowest rank (numeric value). The hash will not necessarily contain consecutive rank numbers; return the best match from the ranks provided.


Input:
  - Ab object of numbers as keys and values
Output:
  - The key of the key value pair that is the closest

Requirements:
  - We need to find the lowest difference between the key value pairs and return the key
  - may contian negative numbers


Questions:
  - Will we always receive a object as an argument?
  - Will the object every be empty?
  - Will the object contain negative numbers?

Data Structure:
  - Create a lowest object to insert key value pairs

Algorithm:
  - Create an empty differences object
  - Iterate over the the input object 
    - Get the difference between the key value pairs
    - Ad the the rank and the difference to object
  - Iterate over the values to find the lowest 
  - Return the rank that equal the lowest

*/

function nexus(ranks) {
  let differences = {};

  for (let rank in ranks) {
    let difference = Math.abs(rank - ranks[rank]);
    differences[rank] = difference;
  }

  let lowest = Object.values(differences).sort((a, b) => a - b)[0];
  let lowestDiff = [];

  for (let rank in differences) {
    if (differences[rank] === lowest) {
      lowestDiff.push(rank);
    }
  }

  return Number(lowestDiff.sort((a, b) => a - b)[0]);
}


console.log(nexus({1: 93, 10: 55, 15: 30, 20: 19, 23: 11, 30: 2})) // 20
console.log(nexus({3: -33, 4: -86, 5: -34, 7: -6})) // 7
