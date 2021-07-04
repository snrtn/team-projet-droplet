// hambuger icon event 
$(function () {
  /* header - sidenav */
  $('.hambuger').click(function () {
    $(this).toggleClass('active');
    $('header').toggleClass('active');
  });
});

// Header, Navbar SlideDown, Line 23
// I'm fix it.
$(document).ready(function () {
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 10){
        $('.test').fadeIn();
        $('.test').css('background-color','rgba(51, 51, 51, 0.7)');
        $('#test').css('color','transparent');
      }
      if ($(this).scrollTop() < 10){
        $('#test').css('color','#fff');
        $('#test').css('transition','0.5s');
      }
    });
  });
});