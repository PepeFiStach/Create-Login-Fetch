import {tryFetch, tryFetch2} from './ajax_send.js';

document.getElementById('submit_btn')
    .addEventListener('click', tryFetch2, false);