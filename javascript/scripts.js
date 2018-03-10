// Mobile menu
function toggleMenu() {
  var mobileMenu = document.getElementById('mobile-menu');
  if(mobileMenu.style.display == "block") { // if is mobileMenu displayed, hide it
    mobileMenu.style.display = "none";
  }
  else { // if is mobileMenu hidden, display it
    mobileMenu.style.display = "block";
  }
}

// Logo Rises for desktop menu
var setSkrollr = function($el, data) {
  for (var i = 0, l = data.length; i < l; i++) {
      var d = data[i],
          px = d[0];
          css = d[1];
      $el.attr('data-' + px, css);
  }
}
if ( $(window).width() > 540 ) {
  jQuery(function($) {
    setSkrollr($('#logorise'), [[0, 'transform:translateY(-100%)'], [0, 'transform:translateY(-37px)'], [600, 'transform:translateY(-100%)']]);
    
    skrollr.init({
        smoothScrolling: false
    });
  });
  }

// Smooth scroll to top
var timeOut;
function scrollToTop() {
  if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
    window.scrollBy(0,-50);
    timeOut=setTimeout('scrollToTop()',10);
  }
  else clearTimeout(timeOut);
}

// Back to Top button appearence
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 500) {
    $('.totop').fadeIn();
  } else {
    $('.totop').fadeOut();
  }
});

// Witnesses slides
jQuery(document).ready(function ($) {

  setInterval(function(){
    $(".wit-slideshow ul").animate({marginLeft:-250},600,function(){
      $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
    })
  }, 10000);

  $("#wit-right").click(function(){
    $(".wit-slideshow ul").animate({marginLeft:-250},600,function(){
      $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
    })
  });

  $("#wit-left").click(function(){
    $(".wit-slideshow ul").animate({marginLeft:250},600,function(){
      $(this).css({marginLeft:0}).find("li:first").before($(this).find("li:last"));
    })
  });

});

// animated counters

jQuery(document).ready(function ($) {
  $('.count-numbers').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });
});