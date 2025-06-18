function totalArea(array) {
  let areasOfRecs = array.map(arr => arr[0] * arr[1] );
  let totalArea = areasOfRecs.reduce((acc, value) => acc + value, 0);

  console.log(totalArea);
}

function  totalSquareArea(array) {
  let squares = array.filter(rec => rec[0] === rec[1]);

  console.log(totalArea(squares));
}


let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles);    // 141

totalSquareArea(rectangles);    // 121