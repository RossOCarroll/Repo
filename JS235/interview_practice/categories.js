const DATA = [
  {
    id: 1,
    name: 'Fruits',
    items: [
      { id: 101, name: 'Apple', description: 'A sweet red fruit.' },
      { id: 102, name: 'Banana', description: 'A long yellow fruit.' },
    ],
  },
  {
    id: 2,
    name: 'Vegetables',
    items: [
      { id: 201, name: 'Carrot', description: 'An orange root vegetable.' },
      { id: 202, name: 'Broccoli', description: 'A green cruciferous vegetable.' },
    ],
  },
];

const categoryList = document.getElementById('category-list');
const itemTitle = document.getElementById('item-title');
const itemDescription = document.getElementById('item-description');
const status = document.getElementById('status');
const expandBtn = document.getElementById('expand-btn');

expandBtn.addEventListener('click', handleExpandBtn);
categoryList.addEventListener('click', handleCatClick);

function renderCategories() {
  DATA.forEach(category => {
    //console.log(category);
    const li = document.createElement('li');
    li.classList.add('category');
    li.dataset.id = category.id;

    const span = document.createElement('span');
    span.classList.add('category-name');
    span.textContent = category.name;

    const button = document.createElement('button');
    button.classList.add('toggle');
    button.textContent = 'Hide';

    const ul = document.createElement('ul');
    ul.classList.add('items');

    category.items.forEach(item => {
      const itemLi = document.createElement('li');
      itemLi.dataset.id = item.id;
      itemLi.classList.add('item');
      itemLi.textContent = item.name;
      ul.appendChild(itemLi);
    })

    li.append(span, button, ul);
    categoryList.appendChild(li);

  })
}

function handleCatClick(event) {
  const button = event.target.closest('.toggle');
  const categoryName = event.target.closest('.category-name')

  if (button || categoryName) {
    const li = event.target.closest('.category');
    const itemsUl = li.querySelector('.items');
    const toggleBtn = li.querySelector('.toggle');

    itemsUl.hidden = itemsUl.hidden ? false : true;
    toggleBtn.textContent = itemsUl.hidden ? 'Show' : 'Hide';
    return;
  }

  const itemLi = event.target.closest('.item');
  if (itemLi) {
    const categoryLi = itemLi.closest('.category');
    const categoryId = Number(categoryLi.dataset.id);
    const itemId = Number(itemLi.dataset.id);

    const dataCat = DATA.find(cat => cat.id === categoryId);
    const item = dataCat.items.find(i => i.id === itemId);

    itemTitle.textContent = item.name;
    itemDescription.textContent = item.description;
    status.textContent = `Selected: ${dataCat.name} / ${item.name}`;
    return;
  }
}

function handleExpandBtn(event) {
  const expandAll = event.currentTarget.textContent === 'Expand All';
  Array.from(categoryList.children).forEach(node => {

    const itemsUl = node.querySelector('.items');
    const button = node.querySelector('.toggle');
    button.textContent = expandAll ? 'Hide' : 'Show';
    itemsUl.hidden = !expandAll;
  });

  event.currentTarget.textContent = event.currentTarget.textContent === 'Colapse All' ? 'Expand All' : 'Colapse All';
}


renderCategories();