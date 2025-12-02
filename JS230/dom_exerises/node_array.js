function nodesToArr() {
  return nodeToArray(document.body)
}

function nodeToArray(el) {
  const result = [el.tagName, []];

  for (let i = 0; i < el.children.length; i++) {
    let child = el.children[i];
    result[1].push(nodeToArray(child));
  };

  return [...result];
}

nodesToArr();