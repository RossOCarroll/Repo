// function swapName(name) {
//   let nameArray = name.split(' ');
//   console.log(nameArray[1] + ', ' + nameArray[0]);
// }


function swapName(name) {
  let nameArray = name.split(' ');
  let lastName = nameArray.pop();

  return lastName + ', ' + nameArray.join(' ');
}


console.log(swapName('Billy Joe Roberts'));    // "Roberts, Joe"