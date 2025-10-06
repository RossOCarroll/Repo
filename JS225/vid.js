// let arr = ['a', 'b'];
// let obj = {word: 'hello'};

// function func() {}

// arr.prototype = Array.prototype;

// console.log(arr.prototype);
// console.log(obj.constructor);
// console.log(func.prototype);
// console.log(func.constructor);


// function UserCreator(name, points) {
//   this.name = name;
//   this.points = points;
// }

// UserCreator.prototype.add = function() {
//   this.points += 1;
// }

// const user = new UserCreator('Ross', 3); 

function UserCreator(name) {
  this.name = name;
}

UserCreator.prototype.sayName = function() {
  console.log(`I'. ${this.name}`);
}

function PaidUserCreator(paidName, balance) {
  UserCreator.call(this, paidName);
  this.balance;
}

PaidUserCreator.prototype.increase = function() {
  this.balance += 1;
}

const user1 = new UserCreator("Dean");

const paidUser1 = new PaidUserCreator('Ryan', 3);