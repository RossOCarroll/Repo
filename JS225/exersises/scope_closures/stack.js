function newStack() {
  let stack = [];

  return {
    push(ele) {
      stack.push(ele);
    },

    pop() {
      stack.pop();
    }, 

    printStack() {
      for (let i = stack.length - 1; i >= 0; i--) {
        console.log(stack[i]);
      }
    }
  }
}

let myStack = newStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
myStack.printStack();


