import {tryFetch, tryFetch2} from './ajax_send.js';

document.getElementById('submit_btn')
    .addEventListener('click', tryFetch, false);

document.getElementById('submit_btnIN')
    .addEventListener('click', tryFetch2, false);