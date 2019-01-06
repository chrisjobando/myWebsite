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

function highlight() {
  $(document).ready(function () {
    var str = location.href.toLowerCase();
    $('.navigation li a').each(function () {
      if (str.indexOf(this.href.toLowerCase()) > -1) {
        $('li.highlight').removeClass('highlight');
        $(this).parent().addClass('highlight');
      }
    });
  });
}
