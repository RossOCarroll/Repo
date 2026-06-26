// Implement a function `dfs` that accepts two arguments: the adjacency list
// representing a directed acyclic graph and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

/*
Algorithm:
  - Create a stack that is an empty array
  - Add the vortext input ass the first element in the stack
  - Loop while stack is greater then 0
    - pop the element from the stack and log to the console
    - iterate through the neihbors in the stack



*/

// function dfs(adjList, source) {
//   let stack = [source];

//   while (stack.length !== 0) {
//     let current = stack.pop();
//     console.log(current);
//     let neighbors = adjList.get(current);
//     for (let neighbor of neighbors) {
//       stack.push(neighbor);
//     }
//   }
// }

// recursive

// function dfs(adjList, source) {
//   console.log(source);
//   let neighbors = adjList.get(source);
  
//   for (let neighbor of neighbors) {
//     dfs(adjList, neighbor)
//   }
// }


// const adjList = new Map();
// adjList.set(1, []);
// adjList.set(2, [1, 3, 4]);
// adjList.set(3, [5]);
// adjList.set(4, [6]);
// adjList.set(5, []);
// adjList.set(6, []);
// adjList.set(7, [6]);

// dfs(adjList, 2); // 2, 4, 6, 3, 5, 1 or 2, 1, 3, 5, 4, 6

// // Note that the output can vary based on the order in
// // which you process neighbors. These two outputs are
// // the most likely, but other valid orders exist.


// Implement a function `bfs` that accepts two arguments: the adjacency list
// representing an acyclic graph and a starting vertex (source).
// The function should print the vertices in breadth-first
// traversal order.

function bfs(adjList, source) {
  let queue = [source];
  let visited = new Set();
  visited.add(source);

  while (queue.length !== 0) {
    let currentNode = queue.shift();
    console.log(currentNode);
    
    let neighbors = adjList.get(currentNode);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

const adjList = new Map();
adjList.set(1, []);
adjList.set(2, [1, 3, 4]);
adjList.set(3, [5]);
adjList.set(4, [6]);
adjList.set(5, []);
adjList.set(6, []);
adjList.set(7, [6]);

bfs(adjList, 2); // 2, 1, 3, 4, 5, 6  or 2, 4, 3, 1, 6, 5

// Again, the order depends on which neighbor node we explore first