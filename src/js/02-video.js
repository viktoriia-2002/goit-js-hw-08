import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
  }, 1000)
);


player.setCurrentTime(30.456).then(function (seconds) {});

