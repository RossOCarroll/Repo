const loadPostsBtn = document.getElementById('load-posts');
const status = document.getElementById('status');
const postsList = document.getElementById('post-list');
const postTitle = document.getElementById('post-title');
const postBody = document.getElementById('post-body');
const commentsList = document.getElementById('comment-list');

loadPostsBtn.addEventListener('click', () => handleLoadPosts());
postsList.addEventListener('click', async (event) => handlePostClick(event));

async function fetchPosts() {
  try {
    status.textContent= 'Loading posts..';
    loadPostsBtn.disabled = true;

    let response = await fetch('src/posts.json');

    if (!response.ok) {
      throw new Error(`There was an HTTP error ${response.status}`);
    }

    status.textContent = '';

    return await response.json();
    
    
  } catch(error) {
    postsList.innerHTML = '';
    status.textContent = 'Failed to load posts.'
    console.error(error)
  } finally {
    loadPostsBtn.disabled = false;
  }
}

async function fetchPost(id) {
  try {
    status.textContent = 'Loading post...';
    let response = await fetch('src/postsid.json'); // normally would add id to the GET request but for the sake of making the app work..

    if (!response.ok) {
      throw new Error(`There was an HTTP error ${response.status}`);
    }

    status.textContent = '';
    return await response.json();

  } catch(error) {
    console.error(error);
  }
}

async function fetchComments(id) {
  try {
    status.textContent = 'Loading post...';
    let response = await fetch('src/posts-comments.json'); // normally would add id to the GET request but for the sake of making the app work..

    if (!response.ok) {
      throw new Error(`There was an HTTP error ${response.status}`);
    }

    status.textContent = '';
    return await response.json();

  } catch(error) {
    commentsList.innerHTML = '';
    status.textContent = 'Failed to load comments';
    console.error(error);
  }
}

async function handleLoadPosts() {
  postsList.innerHTML = '';

  let posts = await fetchPosts();

  posts.forEach(post => {
    const li = document.createElement('li');
    li.dataset.id = post.id;

    li.textContent = post.title;
    postsList.appendChild(li);
  })
}

async function handlePostClick(event) {
  const li = event.target.closest('li');
  if (!li) return;

  const id = Number(li.dataset.id);

  let post = await fetchPost(id);
  let comments = await fetchComments(id);

  postTitle.textContent = post.title;
  postBody.textContent = post.body;

  loadComments(comments);
}

function loadComments(comments) {
  commentsList.innerHTML = '';
  comments.forEach(comment => {
    const li = document.createElement('li');
    li.textContent = comment.body

    commentsList.appendChild(li);
  })
}