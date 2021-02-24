import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';
import 'material-design-icons/iconfont/material-icons.css';

defaultModules.set(PNotifyMobile, {});

defaults.styling = 'material';
defaults.icons = 'material';

function alertQuerySpecific() {
  alert({
    title: 'Too many matches found!',
    text: 'Please, create more specific query',
    delay: 3000,
    hide: true,
    sticker: false,
  });
}
function errorFetch() {
  error({
    title: 'This request was not found.',
    text: 'Please enter a valid request!',
    delay: 3000,
    hide: true,
    sticker: false,
  });
}

export { errorFetch, alertQuerySpecific };
