import { links } from './data.js';

export { debounce, showSearchPopup, showResultSearch };
// Debounce
function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function showSearchPopup() {
  showResultSearch('');
  $('.search-box').css('display', 'flex');
  $('.search-box').fadeIn(300);
  $('#search-key').focus();
}

function showResultSearch(keyword) {
  let htmlGoto = '';
  let htmlGeneral = '';
  links.forEach((element) => {
    let name = element['name'].toLowerCase();
    if (name.includes(keyword)) {
      let html = '';
      if (element['target'] == '_blank') {
        html = `<a class="search-result-item" href="${element['url']}" style="text-decoration: none" 
				target="${element['target']}" id="${element['id']}" >
				<div class="search-result-item-name" style="margin-right: 10px">${element['icon']}</div>
				<div>${element['name']}</div>
				</a>`;
      } else {
        html = `<a class="search-result-item" href="/${element['url']}" style="text-decoration: none" 
				target="${element['target']}" id="${element['id']}" >
				<div class="search-result-item-name" style="margin-right: 10px">${element['icon']}</div>
				<div>${element['name']}</div>
				</a>`;
      }
      if (element['type'] == 'general') {
        htmlGeneral += html;
      } else {
        htmlGoto += html;
      }
    }
  });
  if (htmlGoto) {
    $('.search-list-goto .search-result').html(htmlGoto);
    $('.search-list-goto').show();
  } else {
    $('.search-list-goto').hide();
  }
  if (htmlGeneral) {
    $('.search-list-general .search-result').html(htmlGeneral);
    $('.search-list-general').show();
  } else {
    $('.search-list-general').hide();
  }
}
