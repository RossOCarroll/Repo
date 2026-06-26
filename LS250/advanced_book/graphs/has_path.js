// Given an undirected graph represented by an edge list, determine if
// there is a path between specified source and destination vertices.

// Implement the function `hasPath` that takes three arguments:
// an edge list representing the graph, a source vertex, and a
// destination vertex. The function should return true if a path
// exists between the source and destination, and false otherwise.

/*
Algorithm:
  - Create an adjencent list
  - delcaler a new map
  - iterate through edgeList
    - if a is not present in the list
      - add a to map as the key and an empty array as the value
      - push b to the value of a
    - if b is not present
      - add b as key and an empty array as value
      - push a to empty array

*/

function createAdjList(edgeList) {
  let adjList = new Map();

  edgeList.forEach(([a, b]) => {
    if (!adjList.has(a)) {
      adjList.set(a, []);
    }

    adjList.get(a).push(b);

    if (!adjList.has(b)) {
      adjList.set(b, []);
     
    }
    adjList.get(b).push(a);
  })

  return adjList
}

// function hasPath(edgeList, src, dst) {
//   let adjList = createAdjList(edgeList);
//   let stack = [src];
//   let visited = new Set([src]);

//   while (stack.length !== 0) {
//     let current = stack.pop();
//     let neighbors = adjList.get(current) || [];

//     for (let neighbor of neighbors) {
//       if (!visited.has(neighbor)) {
//         visited.add(neighbor);
//         stack.push(neighbor)
//       }
//     }
//   }

//   return visited.has(dst);
// }

// recursion

function hasPath(edgeList, src, dst) {
  let adjList = createAdjList(edgeList);
  let visited = new Set();

  function dfs(src, dst) {
    if (src === dst) return true;
    visited.add(src);

    for (let neighbor of adjList.get(src)) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, dst)) {
          return true
        }
      }
    }
    return false;
  }

  return dfs(src, dst);
}

console.log(hasPath([[1, 2], [2, 3], [3, 4]], 1, 4) === true);
console.log(hasPath([[1, 2], [3, 4]], 1, 4) === false);
console.log(hasPath([[1, 2], [1, 3], [2, 4], [3, 4], [3, 5], [5, 6]], 1, 6) === true);
console.log(hasPath([], 1, 1) === true);
console.log(hasPath([[1, 2], [1, 3], [4, 5], [6, 7]], 2, 5) === false);
console.log(hasPath([[1, 2], [2, 3], [3, 4], [4, 5], [1, 5], [2, 6], [6, 7], [7, 8], [8, 5]], 1, 8) === true);
console.log(hasPath([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3], [2, 7], [7, 8], [8, 7], [7, 9], [9, 10], [10, 11], [11, 12], [12, 10], [7, 13]], 1, 13) === true);
console.log(hasPath([[1, 2], [2, 3], [3, 1], [4, 5], [5, 6], [6, 4], [7, 8], [8, 9], [9, 10], [10, 7], [11, 12], [13, 14], [14, 15], [15, 13]], 1, 12) === false);
// All test cases should log true