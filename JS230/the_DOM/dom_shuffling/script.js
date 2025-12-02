const navHeader = document.getElementById('navigation');
document.body.prepend(navHeader);

const title = document.querySelector('h1');
navHeader.prepend(title);

let [chinStickFigure, babyMopFigure] = document.querySelectorAll('figure');

let babyMopImg = chinStickFigure.querySelector("img");
let chinStickImg = babyMopFigure.querySelector('img');
chinStickFigure.insertBefore(chinStickImg, chinStickFigure.firstChild);
babyMopFigure.insertBefore(babyMopImg, babyMopFigure.firstChild);

let article = document.querySelector('article');
article.insertBefore(chinStickFigure, null);
article.insertBefore(babyMopFigure, null);
