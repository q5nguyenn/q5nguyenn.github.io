import { showResultSearch, showSearchPopup } from './utility.js';
// Màu ngẫu nhiên và select ngẫu nhiên
let listGradientColors = [
  'linear-gradient( 135deg, var(--colors-pink) 0%, var(--colors-purple) 100% )',
  'linear-gradient(135deg,var(--colors-yellow) 0%,var(--colors-pink) 100%)',
  'linear-gradient( 135deg, var(--colors-cyan) 0%, var(--colors-green) 100% )',
  'linear-gradient( 135deg, var(--colors-purple) 0%, var(--colors-cyan) 100% )',
];
let listSelectColors = ['#ff80bf', '#ffff80', '#80ffea', '#9580ff'];
const randomIndex = Math.floor(Math.random() * listGradientColors.length);
const randomGradient = listGradientColors[randomIndex];
const randomSelect = listSelectColors[randomIndex];
$('body').css('--linear-gradient', randomGradient);
$('body').css('--colors-select', randomSelect);

$('.show-search-box').click(function (e) {
  showSearchPopup();
});

$('.search-box').click(function (e) {
  if (!e.target.closest('.search-body')) {
    $('.search-box').fadeOut(300);
  }
});

$('#search-key').keyup(function (e) {
  let keyword = $(this).val();
  console.log(keyword);
  showResultSearch(keyword);
});

// Copy Hompage
$('.search-box').on('click', '#copy-link', function (e) {
  $('.search-box').fadeOut(300);
  e.preventDefault();
  let homepage = 'https://q5nguyenn.github.io/';
  navigator.clipboard.writeText(homepage);
  $('.popup').fadeIn(300);
  setTimeout(() => {
    $('.popup').fadeOut(300);
  }, 5000);
});

$('.popup-btn-close').click(function (e) {
  $('.popup').fadeOut(300);
});
