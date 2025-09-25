// let greeter = {
//   mourning: function() {
//     console.log('Good Mourning');
//   }
// }

// function evening() {
//   console.log('Good Evening');
// }

// greeter.mourning();

// evening();


let car = {
  fuel: 7.8,
  running: false,
  start: function() {
    this.running = true;
  }
}

car.stop = function() {
  this.running = false;
}

car.drive = function(distance) {
  this.fuel -= distance / 52;
}

// > car;
// = {fuel: 7.8, running: false, start: function}
// > car.start();
// > car;
// = {fuel: 7.8, running: true, start: function}
// > car.stop = function() { this.running = false; }
// = function() { this.running = false; }
// > car.stop();
// > car;
// = {fuel: 7.8, running: false, start: function, stop: function}
// > car.drive = function(distance) { this.fuel -= distance / 52; }
// = function(distance) { this.fuel -= distance / 52; }
// > car.drive(139);
// > car;
// = {fuel: 5.126923076923077, running: false, start: function, stop: function, drive: function}