// // thousands of lines of messy JavaScript code!

// var myPet = {
//   type: 'Dog',
//   name: 'Spot',
// };

// console.log(`I have pet ${myPet.type} named ${myPet.name}`);

// // more messy JavaScript code


// (function createAndLogPete() {
//   var myPet = {
//     type: 'Dog',
//     name: 'Spot',
//   };

//   console.log(`I have pet ${myPet.type} named ${myPet.name}`);
// })();



// let generateStudentId = (function () {
//   let studentId = 0;
  
//   return function() {
//     studentId += 1;
//     return studentId;    
//   }

// })();

// console.log(generateStudentId());
// console.log(generateStudentId());
// console.log(generateStudentId());

let inventory = (function() {
  let stocks = [];

  function isValid(newStock) {
    return stocks.every(stock => {
      return stock.name !== newStock.name;
    })
  }

  return {
    stockCounts() {
      stocks.forEach(stock => {
        console.log(stock.name + ': ' + String(stock.count));
      })
    },

    addStock(newStock) {
      if(isValid(newStock)) {
        stocks.push(newStock);
      }
    }    
  }
})();

inventory.addStock({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();
// logs:
// ballpen: 5

inventory.addStock({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();
// logs:
// ballpen: 5

inventory.stocks.push({
  name: 'ballpen',
  count: 5,
});
// results in an error