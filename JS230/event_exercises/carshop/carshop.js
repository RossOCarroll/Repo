
class Carshop {
  constructor(cars) {
    this.cars = cars;
    this.makes = this.filtered(cars, 'make');
    this.models = this.filtered(cars, 'model');
    this.prices = this.filtered(cars, 'price');
    this.years = this.filtered(cars, 'year');
    this.filterBtn = this.createFilterBtn();

    this.render();
    this.populateCars(this.cars);

    document.getElementById('make_select').addEventListener('change', () => {
      this.upDateModels();
    })
  }

  filtered(cars, key) {
    let list = [];

    for (let car of cars) {
      if (!list.includes(car[key])) {
        list.push(car[key]);
      }
    }

    return list;
  }

  render() {
    this.populateSelect('make_select', this.makes);
    this.upDateModels();
    this.populateSelect('price_select', this.prices);
    this.populateSelect('year_select', this.years);
  }

  populateSelect(selectId, values) {
    const select = document.getElementById(selectId);
    values.forEach(value => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  }

  populateCars(cars) {
    const container = document.getElementById('cars');
    container.innerHTML = '';

    cars.forEach(car => {
      const carDiv = document.createElement('div');
      carDiv.classList.add('car');

      const figure = document.createElement('figure');
      const img = document.createElement('img');
      img.src = car.image;
      figure.appendChild(img);
      carDiv.appendChild(figure);

      const h2 = document.createElement('h2');
      h2.textContent = `${car.make} ${car.model}`;
      carDiv.appendChild(h2);

      const year = document.createElement('p');
      year.classList.add('year');
      year.textContent = `Year: ${car.year}`
      carDiv.appendChild(year);

      const price = document.createElement('p');
      price.classList.add('price');
      price.textContent = `Price: ${car.price}`;
      carDiv.appendChild(price);

      const a = document.createElement('a');
      a.href = '#';
      a.textContent = 'Buy';
      carDiv.appendChild(a);

      container.appendChild(carDiv);
    })
  }

  createFilterBtn() {
    const filterBtn = document.querySelector('.filter_btn');

    filterBtn.addEventListener('click', event => {
      event.preventDefault();

      let selectedMake = document.getElementById('make_select').value;
      let selectedModel = document.getElementById('model_select').value;
      let selectedPrice = document.getElementById('price_select').value;
      selectedPrice = selectedPrice ? Number(selectedPrice) : '';
      let selectedYear = document.getElementById('year_select').value;
      selectedYear = selectedYear ? Number(selectedYear) : '';

      let filteredCars = this.cars.filter(car => {
        return (selectedMake === '' || car.make === selectedMake) && 
               (selectedModel === '' || car.model === selectedModel) &&
               (selectedPrice === '' || car.price === selectedPrice) &&
               (selectedYear === '' || car.year === selectedYear);
      });

      this.populateCars(filteredCars);
    })

    return filterBtn;
  }

  upDateModels() {
    const modelSelect = document.getElementById('model_select');
    const makeSelect = document.getElementById('make_select');
    const selectedMake = makeSelect.value;

    modelSelect.innerHTML = "<option value=''>Any</option>";

    const models = this.cars
      .filter(car => !selectedMake || car.make === selectedMake)
      .map(car =>  car.model)
      .filter((value, index, self) =>  self.indexOf(value) === index);

    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    })
  }
}



const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

document.addEventListener('DOMContentLoaded', () => {
  new Carshop(cars);
})
