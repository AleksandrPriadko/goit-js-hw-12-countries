//import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
//import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
//import { defaults } from '@pnotify/core';
import 'material-design-icons/iconfont/material-icons.css';
import { notice, defaultModules, defaults } from '@pnotify/core';
import * as PNotifyCountdown from '@pnotify/countdown';

defaults.styling = 'material';
// This icon setting requires the Material Icons font. (See below.)
defaults.icons = 'material';

// defaultModules.set(PNotifyMobile, {});

// alert({
//   text: 'Notice me, senpai!',
// });
function myNotice() {
  notice({
    type: type,
    title: 'Countdown Notice',
    text: "I've got a countdown display.",
    modules: new Map([
      ...defaultModules,
      [
        PNotifyCountdown,
        {
          anchor: 'bottom',
          reverse: false,
        },
      ],
    ]),
  });
}

export default myNotice;
