$(document).on ("turbolinks:load", function(){
  // menu version mobile
  $('#nav-toggle').click(function(e) {
    $('.main-nav').toggleClass('is-open');
    $('.hamburger').toggleClass('is-open');
    $('body').toggleClass('fixed');
    $('#menu-app-slide').toggleClass('slider');
    console.log("test");
  });

// top 10
  $('.classement-cover').click(function() {
    $(".classement-players").toggle(200);
  });

})
