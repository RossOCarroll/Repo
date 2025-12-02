function domTreeTracer(id) {
  let node = document.getElementById(String(id));
  let result = [];

  while (node.parentNode && node.parentNode.nodeName !== 'BODY') {
    let siblings = [];
    for (let child of node.parentNode.children) {
      siblings.push(child.nodeName);
    }
    result.push(siblings);
    node = node.parentNode;
  }

  return result;
}