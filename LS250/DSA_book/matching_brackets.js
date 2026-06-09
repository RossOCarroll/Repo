// Write a function `areMatched` that takes a string as an argument
// and returns true if all types of brackets (parentheses (),
// square brackets [], and curly braces {}) in the string are
// properly matched. For the brackets to be considered
// matched, every opening bracket must have a corresponding
// closing bracket of the same type, and the brackets must be
// correctly nested.

/*
Input: A string of brackets and parentheses
Output: Boolean

Problem:
  - Given a string of parentheses, square brackets or curly brackets return true or false the brackets match
  - Matched meaning every opening bracket has a closing bracket:

Explicit:
  - Brackets must be nested correctly

Implicit:
  - an empty string is considered matched

Data Structure:
  - Stack structure

Algorithm:
  - Iterate through the string
    - When a char has an open bracket 
      - We push it to the stack
    - When a char is a closed bracket
      -We attempt to pop the last char from the stack
        - If the stack is empty we return false
        - If the current char and the popped char are not a match return false
        - if we have not return false keep iterating
    - if at the end if the stack is empty we can return true
    - else return false


*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  peek() {
    if (this.top) {
      return this.top.val
    } else {
      return null;
    }
  }

  push(value) {
    this.top = new ListNode(value, this.top)
  }

  pop() {
    
    if (!this.top) {
      return null;
    } else {
      let top = this.top;
      this.top = this.top.next;
      return top;
    }
  }
}

function areMatched(str) {
  let stack = new Stack();
  const matches = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    
    if ('({['.includes(currentChar)) {
      stack.push(currentChar);
    } else if (')}]'.includes(currentChar)) {
      let last = stack.pop();
      if (matches[last.val] !== currentChar) {
        return false
      }
    }
  }

  return stack.top === null;
}

console.log(areMatched("()"));              // Output: true
console.log(areMatched("([()]{})"));        // Output: true
console.log(areMatched("([((}]({}))"));     // Output: false
console.log(areMatched("{{[[(())]]}}"));    // Output: true
console.log(areMatched(""));                // Output: true
console.log(areMatched("([)]"));            // Output: false