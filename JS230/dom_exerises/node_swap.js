function nodeSwap(id1, id2) {
  let elementA = document.getElementById(id1);
  let elementB = document.getElementById(id2)

  if (!elementA || !elementB) return undefined;
  if (elementA.contains(elementB) || elementB.contains(elementA)) return undefined;

  return swap(elementA, elementB);

}

function swap(a, b) {
  const temp = document.createElement("div");

  a.parentNode.insertBefore(temp, a);
  b.parentNode.insertBefore(a, b);
  temp.parentNode.insertBefore(b, temp);
  temp.remove();
  return true;
}




// at least one of the id attributes doesn't exist
nodeSwap(1, 20);
//= undefined

// at least one of the nodes is a "child" of the other
nodeSwap(1, 4);
//= undefined
nodeSwap(9, 3);
//= undefined

nodeSwap(1, 2);
nodeSwap(3, 1);
nodeSwap(7, 9);