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
    el.style.transition = '0.2s';
  }
  if (Math.ceil(scrolled) != scrollable) {
    var el = document.getElementById("test");
    el.style.opacity = '1'
    el.style.transition = '1s';
  }
});