/*
Create a function that returns which chapter is nearest to the page you're on. If two chapters are
 equidistant, return the chapter with the higher page number.

Input:
  - Object with the keys as the chapter and the values as the page the chapter starts on
  - Number that is the current page number

Output
  - The chanpter that is the nearest to the current page

Requirments:
  - If the chapter two chapters are equaldistant return the chapter with the higest number
  -

Questions:
  - Will there be an input other than an object and a number?
  - Will an empty object ever be input
  - a negative page number?

Data structure:
  - Iterating through the input object
  - Working with numbers to find the distance

Algorithm:
  - Declare a distance variable set to 0
  - declare a closest chapter
  - Iterate over the object
    - Get the distance from the current page - chapter page
    - If the distance < then the previous distance
      - assign current chapter to closest chapter
    - else if the distance of the current chapter is equal
      - ass to the closet chapter the chapter with the higher page count
  - return closest chapter
*/
function getDistances(chapters, pageNum) {
  let obj = {};

  for (let chapter in chapters) {
    obj[chapter] = Math.abs(pageNum - chapters[chapter]);
  }
  return obj;
}

function nearestChapter(chapters, pageNum) {
  let distances = getDistances(chapters, pageNum);
  let shortestDistance = Math.min(...Object.values(distances));
  let shortestChapters = {};

  for (let chapter in distances) {
    if (distances[chapter] === shortestDistance) {
      shortestChapters[chapter] = chapters[chapter];
    }
  }

  if (Object.keys(shortestChapters).length > 1) {
    let mostPages = Math.max(...Object.values(shortestChapters));
    for (let chapter in chapters) {
      if (chapters[chapter] === mostPages) {
        return chapter;
      }
    }
  } else {
    return Object.keys(shortestChapters)[0];
  }

}


console.log(nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10))
//➞ "Chapter 2"


console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200))
//➞ "The End?"


console.log(nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3)) //➞ "Chapter 1b"