function staggeredCase(string) {
  let trigger = true;
  let staggeredCase = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[a-zA-Z]/)) {
      if (trigger) {
        staggeredCase += string[i].toUpperCase();
        trigger = !trigger;
      } else {
        staggeredCase += string[i].toLowerCase();
        trigger = !trigger;
      }
    } else {
      staggeredCase += string[i]
    }
  }

  return staggeredCase;
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"