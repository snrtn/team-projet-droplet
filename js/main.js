// Header, Navbar SlideDown, Line 23
$(document).ready(function () {
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 5){
        $('.test').fadeIn();
        $('.test').css('background-color','rgba(51, 51, 51, 0.7)');
        $('#test').css('color','transparent');
      }
      if ($(this).scrollTop() < 5){
        $('#test').css('color','#fff');
        $('#test').css('transition','0.5s');
      }
    });
  });
});