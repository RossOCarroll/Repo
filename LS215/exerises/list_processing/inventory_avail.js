function transactionsFor(number, transactions) {
  let selected = transactions.filter(transaction => {
        return transaction.id === number;
      });

  return selected;
}

function isItemAvailable(number, transactions) {
  let selectedItem = transactionsFor(number, transactions);
  let quantity = 0;

  selectedItem.forEach(transaction => {
    if (transaction.movement === 'in') {
      quantity += transaction.quantity;
    } else {
      quantity -= transaction.quantity;
    }
  })

  if (quantity > 0 ) {
    return true;
  }

  return false;
}





const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true