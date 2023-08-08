import { showSearchPopup } from './utility.js';

$(document).keydown(function (event) {
  if (event.ctrlKey && event.key == 'q') {
    showSearchPopup();
  }
});
