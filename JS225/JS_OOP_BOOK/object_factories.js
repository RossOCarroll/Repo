// // function createCat(name, color, age) {
// //   return{
// //     name: name,
// //     color: color,
// //     age: age,

// //     speak() {
// //       console.log(
// //         `Meow. I am ${this.name}, ` +
// //         `I am a ${this.age}-year-old ${this.color} cat.`
// //       );
// //     }
// //   };
// // }

// // let cocoa = createCat('Cocoa', "black", 5);
// // let leo = createCat('Leo', 'orange', 3);

// // cocoa.speak();
// // leo.speak();

// function foo() {
//   this.foo = 42;
// }


// function createProduce(name, color) {
//   return {
//     name,
//     color,

//     isRipe() {
//       return `This ${this.name} is ripe.`;
//     },

//     describe() {
//       return `This ${this.name} is ${this.color}.`;
//     }
//   }
// }

// let apple = createProduce('Apple', 'Red');
// let banana = createProduce('Banana', 'Yellow');
// let blackberry = createProduce('Blackberry', 'Black');


// function createSmartPhone(brand, model, releaseYear) {
//   return {
//     brand, 
//     model, 
//     releaseYear,

//     checkBattery() {
//       console.log(`${this.model} battery is at 75%.`)
//     },

//     info() {
//       console.log(`${this.brand} ${this.model} was released in ${this.releaseYear}.`)
//     }
//   }
// }

// let iphone = createSmartPhone('Apple', 'iPhone 12', 2020);
// let galaxy = createSmartPhone('Samsung', 'Galaxy S21', 2021);

// iphone.checkBattery();
// galaxy.info();


function createInstrument(name, type) {
  return {
    name,
    type,

    play() {
      return `We are playing a tune on this ${this.name}.`
    },

    showType() {
      return ` This ${this.name} is a ${this.type} instrument.`
    },
  };
}

let violin = createInstrument('violin', 'string');
violin.play();     // We are playing a tune on this violin
violin.showType(); // This violin is a string instrument

let flute = createInstrument('flute', 'wind');
flute.play();      // We are playing a tune on this flute
flute.showType();  // This flute is a wind instrument

let drum = createInstrument('drum', 'percussion');
drum.play();       // We are playing a tune on this drum
drum.showType();   // This drum is a percussion instrument