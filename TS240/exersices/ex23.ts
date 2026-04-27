type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch shape.kind {
    case "circle": 
      return Math.PI * shape.radius ** 2;
      break;
    case 'square':
      return shape.sideLength ** 2;
      break;
    default:
      const _exhaustiveCheck: never = shape;
      throw new Error(`Invalid shape: ${JSON.stringify(_exhaustiveCheck)}`);

  }
}