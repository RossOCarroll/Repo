function greetings(name, info) {

  console.log(`Hello ${name.join(' ')}! Nice to hace a ${info.title} ${info.occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.