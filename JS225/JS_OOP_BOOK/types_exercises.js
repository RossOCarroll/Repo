// let aircraft = {
//   name: 'Cessna 152',
//   fuelCapacity: 24.5,
//   speed: 111,

//   takeOff() {
//     console.log(`${this.name} is taking off`);
//   },

//   land() {
//     console.log(`${this.name} is landing`)
//   }

// }

// aircraft.land();
// aircraft.takeOff();


// function book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// let neuromancer = new book ('Neuromancer', 'William Gibson', 1984);

// console.log(neuromancer);

// let doomsdayBook = new book ('Doomsday Book', 'Connie Willis', 1992);;

// console.log(doomsdayBook);

// function Album(title, artist, releaseYear) {
//   this.title = title;
//   this.artist = artist;
//   this.releaseYear = releaseYear;
// }

// let thriller = new Album('Thriller', 'Micheal Jackson', 1982);
// let darkSide = new Album('The Darkside of the Moon', 'Pink Floyd', 1973);

function Phone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;

  this.checkBattery = function() {
    console.log(`${this.model} hass %50 battery`);
  };

  this.info = function() {
    console.log(`${this.model} is made by ${this.brand} and was released in ${this.releaseYear}`);
  };
}

let iphone = new Phone('Apple', 'Iphone12', 2020);
let galaxy = new Phone('Samsung', 'Galaxy S21', 2021);

iphone.checkBattery();
galaxy.info();