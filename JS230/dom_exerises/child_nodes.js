function childNodes(id) {
  let node = document.getElementById(String(id));
  let direct = node.childNodes.length;

  function countDescendants(n) {
    let count = 0;
    n.childNodes.forEach(child => {
      count += 1 + countDescendants(child);
    });

    return count;
  }
  const totalDescendants = countDescendants(node);
  const indirect = totalDescendants - direct;
  return [direct, indirect];
}

childNodes(1);