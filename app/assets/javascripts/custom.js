$(function(){
    // $(".logo").click(function(){
    //   $(".section").toggle(200);
    // });


    // hamburger menu toggle
    $('.nav-toggle').click(function() {
      $('.menu').toggleClass('menuapp');
      $('.main-nav').toggleClass('is-open');
      $('.hamburger').toggleClass('is-open');
      $('body').toggleClass('shadow');
    })

  });
