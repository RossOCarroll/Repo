const searchTerm = document.getElementById('search-term');
const searchBtn = document.getElementById('search-btn');
const status = document.getElementById('status');
const resultsList = document.getElementById('results');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookYear = document.getElementById('book-year');
const bookDescription = document.getElementById('book-description');

searchBtn.addEventListener('click', handleSearchBtn);
resultsList.addEventListener('click', handleBookClick);

async function fetchBooks(query) {
  query = encodeURIComponent(query)
  try {
    let response = await fetch(`/books?search=${query}`)

    if (!response.ok) {
      throw new Error(`There was an HTTP error: ${response.status}`)
    }

    return await response.json();
  } catch(error) {
    status.textContent = 'Search failed.'
    console.error(error);
  }
}

async function fetchBook(id) {
  try {
    let response = await fetch(`/books/${id}`)

    if (!response.ok) {
      throw new Error(`There was an HTTP error: ${response.status}`)
    }

    status.textContent = '';

    return await response.json();
  } catch(error) {
    status.textContent = 'Failed to load book details.'
    console.error(error);
  }
}

function displayBooks(books) {
  resultsList.innerHTML = '';

  books.forEach(book => {
    const li = document.createElement('li');
    li.dataset.id = book.id;
    li.textContent = book.title;

    resultsList.append(li);
  })
}

async function handleSearchBtn(event) {
  const query = searchTerm.value.trim();

  if (query.length <= 0) {
    status.textContent = 'Please enter a search term';
    return;
  }

  status.textContent = 'Searching...'
  let books = await fetchBooks(query);

  if (books.length <= 0 || !books) {
    status.textContent = 'No books found.';
    return;
  }

  status.textContent = '';


  displayBooks(books);

}

async function handleBookClick(event) {
  const li = event.target.closest('li');
  if (!li) return;

  const id = Number(li.dataset.id);
  status.textContent = 'Loading book...';

  bookAuthor.textContent = '';
  bookTitle.textContent = '';
  bookDescription.textContent = '';
  bookYear.textContent = '';

  const book = await fetchBook(id);
  if (!book) return;

  bookAuthor.textContent = book.author;
  bookTitle.textContent = book.title;
  bookDescription.textContent = book.description;
  bookYear.textContent = book.year;
}
