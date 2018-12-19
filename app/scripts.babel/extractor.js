'use strict';

const data = {};
const courses = [...document.querySelectorAll('.gwt-course-list .v-pnl .h-pnl .txt')].map(a => a.innerHTML.split(' :: ')[0]);
