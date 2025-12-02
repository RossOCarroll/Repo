function sliceTree(parentId, childId) {
  let parentNode = document.getElementById(String(parentId));
  let childNode = document.getElementById(String(childId));
  let sliced = []

  while (childNode && childNode !== parentNode) {
    sliced.push(childNode.nodeName);
    childNode = childNode.parentNode;
  }

  if (childNode !== parentNode) return undefined
  
  sliced.push(parentNode.nodeName);

  if (sliced.length === 0 ) return undefined;
  return sliced.reverse();
}

sliceTree(1, 4);
sliceTree(1, 76);
sliceTree(2, 5);
sliceTree(5, 4);
sliceTree(1, 23);
sliceTree(1, 22);
sliceTree(11, 19);