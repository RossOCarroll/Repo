let name = prompt('What is your name?');

if (name.endsWith('!')) {
  name = name.slice(0, name.length - 1).toUpperCase()
  alert(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  alert(`Hello ${name}.`);
}