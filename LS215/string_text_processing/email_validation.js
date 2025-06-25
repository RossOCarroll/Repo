function validateLocal(local) {
  if (local.match(/^[a-z0-9]+$/ig)) {
    return true;
  }
  return false;
}

function validateDomain(domain) {
  if (domain.match(/^[a-zA-Z]+(\.[a-zA-Z]+)+$/)) {
    return true;
  }

  return false
}

function isValidEmail(email) {
  let splitEmail = email.split('@');
  let local = splitEmail[0];
  let domain = splitEmail[1];

  if (validateLocal(local) && validateDomain(domain)) {
    return true;
  }

  return false;
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('foo@baz@bar.ph'));          // returns false
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false