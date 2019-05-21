window.onscroll = function() {myFunction()};

var navbar = document.getElementById("menu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};




// var container = document.getElementById('header');
// var windowHeight = window.innerHeight;
// var windowWidth = window.innerWidth;
// var scrollArea = 50 + windowHeight;
// var square1 = document.getElementsByClassName('header-text')[0];
// var square2 = document.getElementsByClassName('header-text')[1];


// // update position of square 1 and square 2 when scroll event fires.
// window.addEventListener('scroll', function() {
//   var scrollTop = window.pageYOffset || window.scrollTop;
//   var scrollPercent = scrollTop*scrollArea || 0;
  
//   square1.style.left = scrollPercent/window.innerHeight + 'px';
//   square2.style.left = 800 - scrollPercent*window.innerHeight*2 + 'px';
// });



new WOW().init();