// variables
const menu = document.querySelector(".hamburger-menu");
const navbarLinks = document.querySelector(".nav-links");

// EventListener
menu.addEventListener("click", () => {
  navbarLinks.classList.toggle("open");
});
