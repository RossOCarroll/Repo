document.addEventListener('DOMContentLoaded', () => {
  let groceriesList = {};
  let groceries = document.getElementById('grocery-list');
  
  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const itemName = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value || 1;

    groceriesList[itemName] = quantity;

    const li = document.createElement('li');
    li.textContent = `${quantity} ${itemName}`;
    groceries.appendChild(li);

    document.getElementById('name').value = '';
    document.getElementById('quantity').value = '';
  });
});