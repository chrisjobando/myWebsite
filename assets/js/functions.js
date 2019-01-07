$(function () {
  $('a').each(function () {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('active'); $(this).parents('li').addClass('active');
    }
  });
});

$(function () {
    mobileNav();
  });

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function () {
    var status = $(this).hasClass('is-open');

    if (status) { $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
    } else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}
