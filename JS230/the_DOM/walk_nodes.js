// function walk(node, callback) {
//   callback(node);

//   for (let index = 0; index < node.childNodes.length; index += 1) {
//     walk(node.childNodes[index], callback);
//   }
// }

// walk(document, node => {
//   if (node.nodeName === 'P') {
//     node.classList.add('article-text');
//   }
// });

// const paragraphs = document.querySelectorAll('p');

// function walk(node, callback) {
//   callback(node);

//   for (let index = 0; index < node.childNodes.length; index += 1) {
//     walk(node.childNodes[index], callback);
//   }
// }


function getElementsByTagName(tagName) {
  let matches = [];

  walk(document.body, (node) => {
    if (node.nodeName.toLowerCase() === tagName) {
      matches.push(node);
    }
  });

  return matches;
}

getElementsByTagName("p").forEach((paragraph) =>
  paragraph.classList.add("article-text")
);



Array.from(paragraphs).forEach((paragraph) =>
  paragraph.classList.add("article-text")
);

let paragraphs = document.getElementsByTagName('p.intro');
let pByClassIntro = [...paragraphs].filter(p => {
  p.classList.contains('intro');
})

pByClassIntro.forEach(paragraph => {
  paragraph.classList.add("article-text");
});
