function toggleMenu() {
  var mobileMenu = document.getElementById('mobile-menu');
  if(mobileMenu.style.display == "block") { // if is mobileMenu displayed, hide it
    mobileMenu.style.display = "none";
  }
  else { // if is mobileMenu hidden, display it
    mobileMenu.style.display = "block";
  }
}
