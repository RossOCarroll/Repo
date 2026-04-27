type Circle = {
  kind: 'circle';
  radius: number;
};

type Square = {
  kind: 'square';
  sideLength: number;
};

type Shape = Circle | Square;

function getArea(shape: Shape): void {
  let area: number 
  if (shape.kind === 'circle') {
    area = Math.PI * shape.radius ** 2;
  } else {
    area = shape.sideLength ** 2;
  }

  console.log('area: ', area)
}

getArea({ kind: "circle", radius: 10 });
getArea({ kind: "square", sideLength: 10 });