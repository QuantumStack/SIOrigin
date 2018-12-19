'use strict';

const API_URLS = {
  GET_SCHEDULES: '',
};

function makeReq(url, data, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', API_URLS[url], true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) callback(JSON.parse(xhr.responseText));
  };
  xhr.send();
}
