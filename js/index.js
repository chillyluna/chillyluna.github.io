$(function() {
  $body = window.opera
    ? document.compatMode == 'CSS1Compat'
      ? $('html')
      : $('body')
    : $('html,body')
  $('.header-down-icon').on('click', function() {
    $body.animate({ scrollTop: $('#features').offset().top }, 1000)
  })
})
