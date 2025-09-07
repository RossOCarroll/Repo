/*
Your task is to create a function that simulates a vending machine.

Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.

The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

The return value is an object with 2 properties:

product: the product name that the user selected.
change: an array of coins (can be empty, must be sorted in descending order).
Examples

vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }

vendingMachine(products, 500, 0) ➞ "Enter a valid product number"

vendingMachine(products, 90, 1) ➞ "Not enough money for this product"
Notes

The products are fixed and you can find them in the Tests tab.
If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
If there's no change, return an empty array as the change.


Input:
  - An object with products, and integer representing money given and an integer the represents the product code
Output:
  - An object with the product and the change given

Requirements:
  - Change is given in 500, 200, 100, 50, 20 , 10
  - Change array must be in decending order 
  - Return invalid if product doesnt exsist
  - Return "not engough money" if the money input is less then the product 
  - If there is no change return an emoty array

QuestionsL


Data structure:
  - Will store an empty change array

Algorithm:
  - Create a coins array
  - Create an empty change array
  - Create a reciept array to hold the product and change
  - minus the product price from the money given
  - Iterate over the change array
    - If the change array === change to be given 
      - Stop iterating
    - If the current coin minus the change to be given is less then current coin
      - append current coin to the change array 
    - else if the current coin minus the change to given is greater then the current coin
      - continue 

  - Return object


*/

function vendingMachine(products, money, productCode) {
  const COINS = [500, 200, 100, 50, 20, 10];
  let change = [];
  let product = products.find(product => product.number === productCode);
  let receipt = {product: product.name};
  let changeToGive = money - product.price;

  if (money < product.price) return "Not enough money for this product";
  if (!product) return "Invalid Product number";

  while (changeToGive > 0) {
    for (let i = 0; i < COINS.length; i++) {
      let coin = COINS[i];
      while (changeToGive >= coin) {
        change.push(coin);
        changeToGive -= coin;
      }
    }
  }

  receipt['change'] = change;
  return receipt;
}


const products = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Condoms' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80,  name: 'Small snack' },
];


console.log(vendingMachine(products, 500, 8))//, { product: 'Potato chips', change: [ 200, 50, 20, 10 ] });
console.log(vendingMachine(products, 500, 1))//, { product: 'Orange juice', change: [ 200, 200 ] });