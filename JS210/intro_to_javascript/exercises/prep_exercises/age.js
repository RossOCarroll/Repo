let rlSync = require('readline-sync')

let age = Number(rlSync.question('How old are you?\n'))

for (let times = 10; times <= 40; times += 10 ) {
  console.log(`In ${times} years, you will be ${times + age} years old`);
}