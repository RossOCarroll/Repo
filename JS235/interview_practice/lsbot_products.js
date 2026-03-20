const filtersDiv = document.getElementById('filters');
const categoryFilter = document.getElementById('category-filter');
const applyFiltersBtn = document.getElementById('apply-filters');
const maxPriceInput = document.getElementById('max-price');
const status = document.getElementById('status');
const productList = document.getElementById('product-list');

applyFiltersBtn.addEventListener('click', (event) => handleFilters(event));

let productsCache;

async function fetchProducts() {
  try {
    status.textContent = 'Loading products...'
    let response = await fetch('/src/products.json');

    if (!response.ok) {
      throw new Error(`There was an HTTP error ${response.status}`);
    }
    let products = await response.json();
    status.textContent = '';
    return products;
  } catch(error) {
    status.textContent = 'Could not load products.'
    console.error(error);
  }
}

async function loadProducts(filterList) {
  productList.innerHTML = '';
  let list
  if (filterList) {
    list = filterList
  } else {
    productsCache = await fetchProducts() || []; 
    list = productsCache;
  }

  if (list.length === 0) {
    status.textContent = 'No products found';
  } else {
    status.textContent = '';
  }
  
  list.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - ${product.category} - ${product.price}`;

    productList.appendChild(li);

  })
}

function handleFilters() {
  const category = categoryFilter.value || 'All';
  const maxPrice = Number(maxPriceInput.value) || Infinity;
  let filteredList

  if (category === 'All') {
    filteredList = productsCache.filter(product => {
      return product.price <= maxPrice;
    })
  } else {
    filteredList = productsCache.filter(product => {
      return product.category === category && product.price <= maxPrice;
    })    
  }

  loadProducts(filteredList)
}

loadProducts()
