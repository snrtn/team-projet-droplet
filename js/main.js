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
        $('.test').fadeIn(1000);
        $('.test').css('background-color','#fff');
        $('.logo a').css('color','#000');
        $('.gnb a').css('color','#000');
        $('.menu a').css('color','#000');
        $('.side_box i').css('color','#000');
      }
      if ($(this).scrollTop() < 9){
        $('.test').fadeIn(1000);
        $('.test').css('background-color','#333');
        $('.logo a').css('color','#fff');
        $('.gnb a').css('color','#fff');
        $('.menu a').css('color','#000');
        $('.side_box i').css('color','#fff');
        $('.test').removeAttr('a');
      }
    });
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

