function times(n, item) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(item);
  }

  return result;
}

function buyFruit(list) {
  let groceryList = [];

  list.forEach(item => {
    groceryList = groceryList.concat(times(item[1], item[0]));
  })

  return groceryList;
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]