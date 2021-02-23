import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { defaults } from '@pnotify/core';
import 'material-design-icons/iconfont/material-icons.css';

defaults.styling = 'material';
defaults.icons = 'material';

function errorFetch() {
  error({
    title: 'Oh No!',
    text: `Such country doesn't exist`,
    delay: 3000,
  });
}

function errorQuerySpecific() {
  error({
    title: 'Too many matches found!',
    text: 'Please, create more specific query',
    delay: 3000,
  });
}
function successQuery() {
  alert({
    title: 'Success',
    text: `Such country doesn't exist`,
    delay: 3000,
  });
}

function successQueryList() {
  alert({
    title: 'Success',
    text: `Here are countries matching on your request`,
    delay: 3000,
  });
}

export { errorFetch, errorQuerySpecific, successQuery, successQueryList };
