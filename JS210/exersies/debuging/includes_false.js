function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element == false) {
      return true;
    }
  }

  return false;
}
                                                                  // returns:
console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]));       // true
console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));             // true

// On line 15 the array passed to the includes false function the function uses an if
// condistional with a loose operator where as it should a strict operator. When the 
// function iterates over the input array it use type coresion for 0, null, or undefined
// and sees them as truthy.