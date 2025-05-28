function centerOf(string) {
  let middle = Math.floor(string.length / 2);
 
  if (string.length % 2 !== 0) {
    console.log(`${string[middle]}`);
  } else {
    console.log(`${string[middle - 1]}${string[middle]}`)
  }

}




centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"