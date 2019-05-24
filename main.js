// window.onscroll = function() {myFunction()};
// var navbar = document.getElementById("button");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("button")
//   } else {
//     navbar.classList.remove("button");
//   }
// };

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



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

var rellax = new Rellax('.rellax');