/*
You want to introduce a discount for your online store. Every customer gets a 25% discount on the most expensive item in the shopping cart. The discount will be calculated on just one item, even if the customer buys more than one of the most expensive item.

Create a function that takes an object and returns the total price after discount.

Examples

twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
]) ➞ 58124.25

twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
]) ➞ 86.96

Input:
  - An array of objects
Output:
  - The most expensive Item with 25% off

Requirements:
  - Iterate through the array, find the price * quantitiy
  - Take 25% discounted price = discount (price * .25) - price

Data Structure:





*/

function twentyFiveOnOne(cart) {
  let highest = cart[0]['price'] * cart[0]['quantity'];

  cart.forEach(item => {
    let currentPrice = item['price'] * item['quantity'];

    if (highest < currentPrice) {
      highest = currentPrice;
    }
  })

  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return +(total - highest * 0.25).toFixed(2);
}

console.log(twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
])) //➞ 58124.25

console.log(twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
])) //➞ 86.96