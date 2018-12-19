'use strict';

const button = document.createElement('button');
button.className = 'siorigin-btn float-right';
button.innerText = 'SIOrigin 🐶';

button.addEventListener('click', () => {
  switch (document.location.hash) {
    case '#schedule-plan':
      coursePlanner();
      break;
    default:
      alert('SIOrigin does not support this section');
      break;
  }
});

const head = document.querySelector('#hdr .navbar-cmu');
const nav = head.querySelector('#nav-content');
head.insertBefore(button, nav);
