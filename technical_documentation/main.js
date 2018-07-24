
var navBurger = document.querySelector(".nav-burger");
navBurger.addEventListener('click', () => {
    navbar.classList.toggle('burger-active');
})

//1 active element for navigation
// Get the container element
var navbar = document.getElementById("navbar");

// Get all items with class="nav-link" inside the container
var navLinks = navbar.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function(e) {
    e.stopPropagation();
    var current = document.getElementsByClassName("active");
    current[0].classList.remove('active');
    this.classList.add("active");
  });
}