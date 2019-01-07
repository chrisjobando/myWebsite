jQuery(document).ready(function ($) {
  // Finds target link from current path
  var path  = window.location.pathname.split('/').pop();
  var target = $('li [href="' + path + '"]').parent().addClass('active');
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
