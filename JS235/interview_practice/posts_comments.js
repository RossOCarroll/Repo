const message = document.getElementById('message');
const postsList = document.getElementById('posts');
const commentCashe = {};
postsList.addEventListener('click', event => handlePostClick(event))

async function fetchPosts() {
  try {
    let response = await fetch('/src/posts.json');
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }

    let posts = await response.json();
    return posts.posts;

  } catch(error) {
    console.error(error);
  }
}

async function fetchComments(postId) {
  try {
    let response = await fetch('/src/comments.json');
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    let data = await response.json();
    let comments = data.comments;

    return comments.filter(comment => comment.postId === postId);
  } catch(error) {
    console.error(error)
  }
}

function closePosts() {
  let openLists = postsList.querySelectorAll('ul');
  openLists.forEach(ul => ul.remove());
}

async function handlePostClick(event) {
  const postLi = event.target.closest('li');
  if (!postLi) return;
  
  const postId = Number(event.target.dataset.id);
  message.textContent = "Loading comments...";

  const exisitingUl = postLi.querySelector('ul');

  if (exisitingUl) {
    exisitingUl.remove();
    return;
  }

  closePosts();

  let comments
  
  if (commentCashe[postId]) {
    comments = commentCashe[postId];
  } else {
    comments = await fetchComments(postId);
    commentCashe[postId] = comments;
  }
  const commentUl = document.createElement('ul');

  comments.forEach(comment => {
    const commentLi = document.createElement('li');
    commentLi.textContent = comment.body;

    commentLi.addEventListener('click', (e) => {e.stopPropagation()} )
    commentUl.appendChild(commentLi);
  })

  postLi.appendChild(commentUl);
  message.textContent = '';
}

async function loadPosts() {
  let posts = await fetchPosts();

  posts.forEach(post => {
    const li = document.createElement('li');
    li.textContent = post.title;
    li.dataset.id = post.id;

    postsList.appendChild(li);
  })
}

loadPosts()