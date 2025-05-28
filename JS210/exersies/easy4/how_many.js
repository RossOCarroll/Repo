function countOccurrences(array) {
  let vehicleObj = {};

  array.forEach(vehicle=> {
    let count = 0;
    array.forEach(vehicleOcc=> {
      if (vehicle === vehicleOcc ) {
        count++
      }
    })
    vehicleObj[vehicle] = count;
  });

  for (let vehicle in vehicleObj) {
    console.log(`${vehicle} => ${vehicleObj[vehicle]}`);
  }
} 



const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1