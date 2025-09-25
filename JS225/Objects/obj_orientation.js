// let scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,

//   setPrice(price) {
//     if (price > 0) {
//       this.price = price;
//     } else {
//       console.log('Invalid Price!');
//     }
//   },

//   describe() {
//     console.log(`=> Name: ${this.name}`);
//     console.log(`=> id: ${this.id}`);
//     console.log(`=> Price: ${this.price}`);
//     console.log(`=> Stock: ${this.stock}`);
//   }
// };

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,

//   setPrice(price) {
//     if (price > 0) {
//       this.price = price;
//     } else {
//       console.log('Invalid Price!');
//     }
//   },

//   describe() {
//     console.log(`=> Name: ${this.name}`);
//     console.log(`=> id: ${this.id}`);
//     console.log(`=> Price: ${this.price}`);
//     console.log(`=> Stock: ${this.stock}`);
//   }
// };

function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

    setPrice(price) {
      if (price > 0) {
        this.price = price;
      } else {
        console.log('Invalid Price!');
      }
    },
  
    describe() {
      console.log(`=> Name: ${this.name}`);
      console.log(`=> id: ${this.id}`);
      console.log(`=> Price: ${this.price}`);
      console.log(`=> Stock: ${this.stock}`);
    }
  }
}


let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);

scissors.describe();
drill.describe();
