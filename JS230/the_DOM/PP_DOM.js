let heading1 = document.getElementById('primary_heading');
heading1.classList.add('heading');

document.getElementById('list').className = 'bulleted';

document.getElementById('toggle').onclick = e => {
  e.preventDefault();
  let notice = document.getElementById('notice');
  if (notice.getAttribute('class') === 'hidden') {
    notice.setAttribute('class', 'visible');
  } else {
    notice.setAttribute('class', 'hidden');
  }
};

document.getElementById('notice').onclick = e => {
  e.currentTarget.className = 'hidden';
};

document.getElementById('multiplication').textContent = String(13 * 9);

document.querySelector('body').setAttribute('id', 'styled');