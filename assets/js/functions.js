$(function () {
  mobileNav();
  highlight();
});

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function () {
    var status = $(this).hasClass('is-open');

    if (status) { $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
    } else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}

var current = document.getElementById('default');

function highlight(el) {
  if (current != null) {
    current.className = '';
  }

  el.className = 'highlight';
  current = el;
}
