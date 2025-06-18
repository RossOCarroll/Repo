let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(band => {
    let capBandName = capitalizeName(band.name);
    let newBandName = removeDots(capBandName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active
    }
  })
}

function capitalizeName(name) {
  return name
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function removeDots(name) {
  return name
    .split('')
    .filter(ele => !(ele === '.'))
    .join('');
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]