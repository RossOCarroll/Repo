// Implement a function `dfs` that accepts two arguments: an adjacency
// list representing an undirected graph, and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

// function dfs(adjList, source, visited = new Set()) {
//   console.log(source);
//   visited.add(source);

//   let neighbors = adjList.get(source);
//   for (let neighbor of neighbors) {
//     if (!visited.has(neighbor)) {
//       dfs(adjList, neighbor, visited);
//     }
   
//   }
// }

// function dfs(adjList, source) {
//   let stack = [source];
//   let visited = new Set([source]);

//   while (stack.length !== 0) {
//     let curr = stack.pop();
//     console.log(curr);
    
//     let neighbors = adjList.get(curr);
//     for (let neighbor of neighbors) {
//       if (!visited.has(neighbor)) {
//         visited.add(neighbor);
//         stack.push(neighbor);
//       }
//     }
//   }
// }


// const adjList = new Map();
// adjList.set(1, [2]);
// adjList.set(2, [1, 3]);
// adjList.set(3, [2]);

// dfs(adjList, 1); // 1, 2, 3


// Implement a function `bfs` that accepts two arguments: the adjacency list
// representing an undirected graph and a starting vertex (source).
// The function should print the vertices in breadth-first
// traversal order.

function bfs(adjList, source) {
  let queue = [source];
  let visited = new Set([source]);

  while (queue.length !== 0) {
    let curr = queue.shift();
    console.log(curr);

    let neighbors = adjList.get(curr);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

const adjList = new Map();
adjList.set(1, [2, 3]);
adjList.set(2, [1, 4]);
adjList.set(3, [1, 4, 5]);
adjList.set(4, [2, 3]);
adjList.set(5, [3, 6]);
adjList.set(6, [5]);

console.log(bfs(adjList, 1)); // 1, 2, 3, 4, 5, 6 or 1, 3, 2, 5, 4, 6