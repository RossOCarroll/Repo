function populationCount(num) {
  if (num < 0) return;
  console.log(num);
  num--;
  populationCount(num);
}

populationCount(10);
