
    // $(".logo").click(function(){
    //   $(".section").toggle(200);
    // });



//
//
    function menuToggle(){
      $('.main-nav').toggleClass('is-open');
      $('.hamburger').toggleClass('is-open');
      $('#menu-app-slide').toggleClass('slider');
      $('body').toggleClass('fixed');
     }
document.querySelector(".nav-toggle").addEventListener("click", toggleMenu)
document.querySelector(".menu-link li").addEventListener("click", toggleMenu)
