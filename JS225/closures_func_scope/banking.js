

function makeBank() {
  let accounts = [];

  function makeAccount(number) {
    let balance = 0;
    let transactions = [];

    return {

      deposit(amount) {
        balance += amount;
        transactions.push({type: 'deposit', amount: amount})
        return amount;
      }, 

      withdraw(amount) {
        if (balance < amount) {
          let newAmount = this.balance;
          balance = 0;
          transactions.push({type: 'withdraw', amount: newAmount})
          return newAmount;
        } else {
          balance -= amount;
          transactions.push({type: 'withdraw', amount: amount})
          return amount;      
        }
      },

      balance() {
        return balance;
      },

      number() {
        return number;
      },

      transactions() {
        return transactions;
      }
    }  
  }

  return {

    openAccount() {
      let number = accounts.length + 101;
      let account = makeAccount(number);
      accounts.push(account);
      return account;
    },

    transfer(source, destination, amount) {
      destination.deposit(source.withdraw(amount));
      return amount;
    }
  }
}

let bank = makeBank();
console.log(bank.accounts);
// undefined