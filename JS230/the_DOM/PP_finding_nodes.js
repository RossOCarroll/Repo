// let h2Elements = document.querySelectorAll('h2');

// let wordCount = [];

// for(let i = 0; i < h2Elements.length; i++) {
//   wordCount.push(h2Elements[i].textContent.split(' ').length);
// }

// console.log(wordCount);


// let toc = document.querySelector('#toc');
// console.log(toc);
// document.GetElementById('toc');


// let tocLinks = document.querySelectorAll('.toclevel-1 a');

// for(let i = 0; i < tocLinks.length; i++) {
//   if (i % 2 === 0) {
//     tocLinks[i].style.color ='red';
//   }
// }

// let thumbCaptions = document.querySelectorAll('.thumbcaption');

// let text = []

// for(let i = 0; i < thumbCaptions.length; i++) {
//   text.push(thumbCaptions[i].textContent.trim());
// }
// console.log(text);


let ranks = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species'];
let classifications = {};
let tds = document.querySelectorAll('.infobox td')
let cell;
let link;

for (let i = 0; i < tds.length; i++) {
  cell = tds[i];

  ranks.forEach(rank => {
    if(cell.textContent.indexOf(rank) !== -1) {
      link = cell.nextElementSibling.firstElementChild;
      classifications[rank] = link.textContent;
    }
  })
}

console.log(classifications);