let invoices = {
  unpaid: [],
  paid: [],
  
  add: function(clientName, amountOwed) {
    let invoice = {
      name: clientName,
      amount: amountOwed,
    }
    this.unpaid.push(invoice);
  },

  totalDue: function() {
    let totalAmt = 0;
    this.unpaid.forEach(invoice => {
      totalAmt += invoice.amount
    })

    return totalAmt;
  },

  payInvoice: function(clientName) {
    let unpaidTemp = [];

    for(let i = 0; i < this.unpaid.length; i++) {
      if (this.unpaid[i].name === clientName) {
        this.paid.push(this.unpaid[i]);
      } else {
        unpaidTemp.push(this.unpaid[i]);
      }
    }
    this.unpaid = unpaidTemp
  },

  totalPaid: function() {
    let totalAmt = 0;
    this.paid.forEach(invoice => {
      totalAmt += invoice.amount
    })

    return totalAmt;
  }
};




invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

console.log(invoices.totalDue());
invoices.payInvoice('Slough Digital');
invoices.payInvoice('Due North Development')
console.log(invoices.unpaid);
console.log(invoices.paid);
console.log(invoices.totalPaid());