let temperatures = [53, 86, 12, 43];

function average() {
  let total = 0;
  let i;

  for (i = this.length - 1; i >= 0; i -= 1) {
    total += this[i];
  }

  return total / this.length;
}

// let averageTemperatures = average.bind(temperatures);
temperatures.average = average;

console.log(temperatures.average())