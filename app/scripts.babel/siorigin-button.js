'use strict';

const button = document.createElement('button');
button.id = 'siorigin-trigger';
button.className = 'button is-primary is-rounded is-medium float-right';
button.innerHTML = '<strong>SIOrigin 🐶</strong>';

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
