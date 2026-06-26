function printAdjList(adjList) {
  console.log(
    "{\n" +
      Array.from(
        adjList,
        ([key, value]) => `  ${key}: [${value.join(", ")}]`
      ).join(",\n") +
      "\n}"
  );
}


function createAdjList(edgeList) {
  let adjList = new Map();

  edgeList.forEach(([a, b]) => {
    if (!adjList.get(a)) {
      adjList.set(a, []);
    } 
    adjList.get(a).push(b);
  

    if (!adjList.get(b)) {
      adjList.set(b, []);
    } 
    adjList.get(b).push(a)

  })

  return adjList;
}



const edgeList1 = [
  [1, 2],
  [2, 3],
  [3, 1],
];

const adjList1 = createAdjList(edgeList1);
printAdjList(adjList1);
// {
//   1: [2, 3],
//   2: [1, 3],
//   3: [2, 1]
// }

const edgeList2 = [
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 4],
  [3, 5],
  [5, 6],
];

const adjList2 = createAdjList(edgeList2);
printAdjList(adjList2);
// {
//  1: [2, 3],
//  2: [1, 4],
//  3: [1, 4, 5],
//  4: [2, 3],
//  5: [3, 6],
//  6: [5]
// }