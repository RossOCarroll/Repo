function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// This code will log debbuging because when the debugit function is called the variable
// status is declared and assign the string 'debugging'. This is varianle is declated in the outer scope
// then logger is called at the bottom of the debug it function body and it logs to the 
// console the status varuable. logger function has access to the outer variable. Due
// to lexical scoping rules.