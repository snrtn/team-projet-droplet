// hambuger icon event 
$(function () {
  /* header - sidenav */
  $('.hambuger').click(function () {
    $(this).toggleClass('active');
    $('header').toggleClass('active');
  });
});

// Section02, GalleryText SlideDown, Line 89
$(document).ready(function () {
  $(".gallery").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('.gallery').fadeIn(1000);
      } 
      if ($(this).scrollTop() < 300){
        $('.gallery').fadeOut(1000);
      }
    });
  });
});