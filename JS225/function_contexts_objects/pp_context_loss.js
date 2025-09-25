// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
//   }
// }

// function logReturnVal(context, func) {
//   let returnVal = func.call(context);
//   console.log(returnVal);
// }

// let description = turk.getDescription.bind(turk)

// logReturnVal(turk, turk.getDescription);

// console.log(description());

// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ' ' + title);
//     }, this);
//   }
// };

// TESgames.listGames();

// let foo = {
//   a: 0,
//   incrementA() {
//     let self = this;
//     function increment() {
//       self.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a);

// let foo = {
//   a: 0,
//   incrementA() {
//     let increment = function() {
//       this.a += 1;
//     }.bind(this);

//     increment();
//     increment();
//     increment();
//   }
// };

// console.log(foo.a);
function Pet(type, legs) {
  this.type = type;
  this.legs = legs;

  this.logInfo = () => {
    console.log(this === myCat); // => true
    console.log(`The ${this.type} has ${this.legs} legs`);
  };
}

const myCat = new Pet('Cat', 4);
// logs "The Cat has 4 legs"
setTimeout(myCat.logInfo, 1000);