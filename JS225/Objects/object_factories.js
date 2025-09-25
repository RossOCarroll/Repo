// let sedan = {
//   speed: 0,
//   rate: 8,

//   accelerate() {
//     this.speed += this.rate;
//   },
// }

// let coupe = {
//   speed: 0,
//   rate: 12,

//   accelerate() {
//     this.speed += this.rate;
//   },
// }

// console.log(sedan);
// sedan.accelerate();
// console.log(sedan)

function makeCar(rate, brakeRate) {
  return {
    speed: 0,
    rate: rate,
    brakeRate: brakeRate,

    accelerate() {
      this.speed += this.rate;
    },
    
    brake() {
      this.speed -= this.brakeRate;
      if (this.speed < 0) {
        this.speed = 0;
      }
    }
  }
}


let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
//8

sedan.brake();
console.log(sedan.speed);

sedan.brake();
console.log(sedan.speed);

