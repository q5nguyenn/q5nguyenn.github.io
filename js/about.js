$(function () {
  $('#copy-quote').click(function (e) {
    let quote = $('blockquote p').html();
    navigator.clipboard.writeText(quote);
    $('.popup').fadeIn(300);
    setTimeout(() => {
      $('.popup').fadeOut(300);
    }, 5000);
  });

  $('.popup-btn-close').click(function (e) {
    $('.popup').fadeOut(300);
  });

  $('#dowload-avatar').click(function (e) {
    const imageURL = $('#avatar').attr('src');
    const link = $('<a>').attr('href', imageURL).attr('download', 'Q.png');
    $('body').append(link);
    link[0].click();
    link.remove();
  });
});
