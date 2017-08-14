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