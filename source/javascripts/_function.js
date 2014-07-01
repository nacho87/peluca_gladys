// $(window).load(function() {
//   $('.flexslider').flexslider({
//     animation: "slide",
//     itemWidth: 210,
//     itemMargin: 5,
//     minItems: 2,
//     maxItems: 4
//   });
// });

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5,
    minItems: 2,
    maxItems: 4
  });
  $('.hero-legend').flexslider({
    animation: "slide",
    itemWidth: 1088,
    minItems: 1,
    directionNav: false,
    slideshowSpeed: 4000,
  });
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
