// hambuger icon event 
$(function () {
  /* header - sidenav */
  $('.hambuger').click(function () {
    $(this).toggleClass('active');
    $('header').toggleClass('active');
  });
});

// subname scroll event
window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (Math.ceil(scrolled) === scrollable) {
    var el = document.getElementById("test");
    el.style.opacity = '0'
    el.style.transition = '1s';
  }
  if (Math.ceil(scrolled) != scrollable) {
    var el = document.getElementById("test");
    el.style.opacity = '1'
    el.style.transition = '2s';
  }
});

// image slide auto
var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 5000);

$(document).ready(function () {
  $(".gallery").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $('.gallery').fadeIn(1000);
      } else {
        $('.gallery').fadeoOut(1000);
      }
    });
  });
});