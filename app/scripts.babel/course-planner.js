'use strict';

const modal = document.createElement('div');
modal.id = 'course-planner-modal';
modal.className = 'modal';
modal.innerHTML = '<div class="modal-background"></div><div class="modal-content"><div class="box"><span class="title">Welcome to SIOrigin Course Planner</span></div></div><button id="course-planner-modal-close" class="modal-close is-large"></button>';
document.body.appendChild(modal);

function toggleCoursePlannerModal() {
  modal.classList.toggle('is-active');
}

const modalClose = document.querySelector('#course-planner-modal-close');
modalClose.addEventListener('click', toggleCoursePlannerModal);

function coursePlanner() {
  toggleCoursePlannerModal();

  makeReq('GET_SCHEDULES', data, (schedules) => {
    console.log(schedules);
  });
}
