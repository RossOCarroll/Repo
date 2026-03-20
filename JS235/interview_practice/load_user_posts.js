const userList = document.getElementById('users');
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (event) => handleInput(event));
const message = document.getElementById('message');
const postsCache = {};

async function getUsers(query) {
  try {
    let response = await fetch('/src/users.json');
    if (!response.ok) {
      throw new Error(`There was an HTTP problem: ${response.status}`)
    }

    let users = await response.json();
    if (query) {
      return users.users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()))
    }
    return users.users;
  } catch(error) {
    console.error(error);
  }
}

async function fetchPosts(id) {
  try {
    let response = await fetch('/src/posts.json')
    if (!response.ok) {
      throw new Error(`There was an HTTP problem: ${response.status}`)
    }

    let posts = await response.json();
    return posts.posts.filter(posts => posts.userId === id);

  } catch(error) {
    console.error(error)
  }
}

async function loadUsers(query) {
  userList.innerHTML = '';
  let users = await getUsers(query);

  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    li.dataset.id = user.id;
    li.addEventListener('click', () => handleUserClick(user.id, li))
    userList.append(li);
  })
}

async function handleUserClick(id, userLi) {
  let existingUl = userLi.querySelector('ul');
  if (existingUl) {
    existingUl.remove();
    return;
  }

  closePosts(userLi);
  message.textContent = 'loading...'

  let posts

  if (postsCache[id]) {
    posts = postsCache[id]
  } else {
    posts = await fetchPosts(id);
    postsCache[id] = posts;
  }

  const postUl = document.createElement('ul');

  posts.forEach(post => {
    const postLi = document.createElement('li');
    postLi.textContent = post.body;
    postLi.addEventListener('click', (e) => e.stopPropagation());
    postUl.appendChild(postLi);
  })

  userLi.appendChild(postUl);
  message.textContent = '';
}

function closePosts(userLi) {
  document.querySelectorAll('#users > li').forEach(li => {
    if (li !== userLi) {
      const postUl = li.querySelector('ul');
      if (postUl) postUl.remove();
    }
  })
}

async function handleInput(event) {
  let query = event.target.value;
  loadUsers(query)
}

loadUsers()