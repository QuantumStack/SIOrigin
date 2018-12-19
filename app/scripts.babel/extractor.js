'use strict';

const data = {};
const courseBoxes = [...document.querySelectorAll('.header.gwt-course-headerpadding')];
data.courses = courseBoxes.map((course) => {
  const number = course.querySelector('.title .h-pnl .txt').innerHTML.slice(0, 5);
  const info = [...course.querySelectorAll('.h-pnl .v-pnl .valign-t .txt')];
  const section = info.map(item => item.innerHTML[0]);
  return { number, section };
});
