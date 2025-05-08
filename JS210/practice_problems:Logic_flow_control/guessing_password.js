let password = 'password';

for (let index = 0; index <= 3; index++) {
  let answer = prompt('Enter your password');

  if (answer === password) {
    alert('You have successfully logged in.');
    break;
  } else {
    alert('incorrect password.');
  }
  if (index === 3) {
    alert('You have been denied access.');
    break;
  }
}