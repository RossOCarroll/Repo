interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

type Pet = Dog & Cat

const pet: Pet = {
  bark() {
    console.log('Woof')
  },
  meow() {
    console.log('Meow');
  }
}



pet.bark();
// Output should be "Woof"
pet.meow();
// Output should be "Meow"