// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky1");
  } else {
    header.classList.remove("sticky1");
  }
}

function dropDown2() {
  var element = document.getElementById("myGallery");
  element.classList.toggle("hidden");
}

function dropDown1() {
  var element = document.getElementById("myGallery");
  element.classList.toggle("hidden");
}


function toggleButton1() {
	var element = document.getElementById("myButton1");
	element.classList.toggle("hidden");
}

function toggleButton2() {
	var element = document.getElementById("myButton2");
	element.classList.toggle("hidden");
}