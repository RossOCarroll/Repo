/*
In the game Set, three cards form a set if each of the cards are identical or completely different for each 
of the four properties. All three cards must:

Have the same color or different colors.
Have the same number or different numbers.
Have the same shades or different shades.
Have the same shape or different shapes.
The four properties are:

Colors: red, purple, green
Numbers: 1, 2, 3
Shades: empty, lined, full
Shapes: squiggle, oval, diamond
Here, a set is represented by an array containing three cards. Each card is represented by an object of 
properties and values. Write a function that determines whether three cards constitute a valid set.

Here is an example of a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

// "Same" properties: color
// "Different" properties: numbers, shading and shapes
The following is not a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
]

// Colors are not all identical, but not all different.

Input:
  - An array of objects, the objects have 4 properties
Output:
  - All the properties should be the same or all be different return true or false

requirements:
  - In the game of set three cards for a set
    - To be a set the four properties of the set have to be all the same or all different
  - The cards are represented in an array of objects
  - a set cannot have 2/3 having the same property

Questions:
  - Will there always be an array with 3 objects input?
  - Will the objects be missing any properties?
  - Will there always be one argument?

Data Structure:
  - Store the values of the properties in arrays
  - return a boolean

Algorithm:
  - Create arrays for the properties
  - Iterate over the the input array
    - for each object in the array capture the values for color, number, shade and shape
  - Combine the arrays into a nested array
  - Helper method: allSameAllDiff
    - Iterate through the array of properties
      - If all the elements in the array are the same or all the elements in the are different 
        - return true
      - else false
  - From the array of properties check to see if all of the elements are true



*/
function allSameAllDiff(prop) {
  const set = new Set(prop);
  return prop.every(val => val === prop[0]) || set.size === prop.length;
}

function isSet(cards) {
  let color = [];
  let number = [];
  let shade = [];
  let shape = [];

  cards.forEach(card => {
    color.push(card['color']);
    number.push(card['number']);
    shade.push(card['shade']);
    shape.push(card['shape']);
  });

  let properties = [color, number, shade, shape];

  let differentOrEven = properties.map(prop =>{
    return allSameAllDiff(prop);
  })

  return differentOrEven.every(val => val === true);
}

console.log(isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]))
//➞ true

console.log(isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]) )
//➞ true

console.log(isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]))
// ➞ false