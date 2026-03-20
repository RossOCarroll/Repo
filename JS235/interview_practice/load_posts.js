import './style.css'


const postList = document.getElementById('posts');
const message = document.getElementById('message');
const loadMoreBtn = document.getElementById('load-more');
loadMoreBtn.addEventListener('click', () => handleLoadMore());
let postsCache = [];
let startIndex = 0;
const PAGE_SIZE = 5;

async function fetchPosts() {
  try {
    let response = await fetch('/src/posts.json');
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    let data = await response.json();
    let posts = data.posts;
    return posts;

  } catch(error) {
    console.error(error);
  }
}

async function initialLoad() {
  postsCache = await fetchPosts();
  let firstFive = postsCache.slice(startIndex, startIndex + PAGE_SIZE);
  startIndex += 5;

  firstFive.forEach(post => {
    const li = document.createElement('li');
    li.textContent = post.title;

    postList.appendChild(li);
  });
}

function handleLoadMore() {
  if (postsCache.length <= startIndex) {
    message.textContent = 'There are no more posts.'
    return;
  }

  let nextFive = postsCache.slice(startIndex, startIndex + PAGE_SIZE);
  startIndex += 5;
  
  nextFive.forEach(post => {
    const li = document.createElement('li');
    li.textContent = post.title;

    postList.appendChild(li);
  });
}

initialLoad()