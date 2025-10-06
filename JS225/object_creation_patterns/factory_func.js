// function createPerson(firstName, lastName) {
//   let person = {};
//   person.firstName = firstName;
//   person.lastName = lastName || '';
//   person.fullName = function() {
//     return (this.firstName + ' ' + this.lastName).trim();
//   }

//   return person;
// }

// let john = createPerson('John', 'Doe');
// let jane = createPerson('Jane');

// john.fullName();
// jane.fullName();


// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   }
// }

// let invoice = {
//   phone: 3000,
//   internet: 6500,
// };
// let payment = {
//   phone: 1300,
//   internet: 5500,
// };
// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700


function createInvoice(services) {
  if (!services) {
    services = {};
  }

  return {
    internet: services.internet || 5500,
    phone: services.phone || 3000,
    payments: [],

    addPayment(payment) {
      this.payments.push(payment);
    },

    addPayments(incomingPayments) {
      incomingPayments.forEach(payment => {
        this.payments.push(payment);
      });
    },

    total() {
      return this.internet + this.phone;
    },

    amountDue() {
      let paymentsTotal = 0;
      this.payments.forEach(payment => {
        paymentsTotal += payment.total();
      });
     return this.total() - paymentsTotal;
    }
  }
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}



function createPayment(services = {}) {
  return {
    internet: services.internet || 0,
    phone: services.phone || 0,
    amount: services.amount,

    total() {
      if(!this.amount) {
        return this.internet + this.phone;
      } else {
        return this.amount;
      }
    }
  }
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0