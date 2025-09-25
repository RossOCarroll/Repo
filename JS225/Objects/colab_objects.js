let cat = {
  name: 'Fluffy',

  makeNoise: function() {
    console.log('Meow Meow');
  },

  eat: function() {

  }
}

let dog = {
  name: 'Maxi',

  makeNoise: function() {
    console.log('Woof Woof');
  }
}

let pete = {
  name: 'Pete',
  pets: [cat, dog],

  printName: function() {
    console.log(`My name is ${this.name}`);
    console.log(`My pets name is ${this.pet.name}`);
  }
}

pete.pets.forEach(pet => {
  pet.makeNoise();
})