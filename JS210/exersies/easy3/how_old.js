function random(min, max) {
  if (min > max) {
    let temp = max;
    max = min;
    max = temp;
  }

  return Math.round(Math.random() * (max - min + 1)) + min;
}

let age = random(200, 20);

console.log(`Teddy is ${age} today.`);