import Vimeo from '@vimeo/player'
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

function onPlay(data) {
  localStorage.setItem("videoplayer-current-time", `${data.seconds}`)
}

player.on('timeupdate', _.throttle(onPlay, 1000));

player.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time")))
