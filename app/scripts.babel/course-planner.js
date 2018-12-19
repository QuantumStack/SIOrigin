'use strict';

function coursePlanner() {
  alert('Welcome to course planner');
  makeReq('GET_SCHEDULES', data, (schedules) => {
    console.log(schedules);
  });
}
