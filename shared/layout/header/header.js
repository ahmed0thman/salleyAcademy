const navTogglers = Array.from(document.querySelectorAll(".nav-toggler"));

function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("open");
}

if (navTogglers.length > 0) {
  navTogglers.map((navToggler) =>
    navToggler.addEventListener("click", toggleMenu)
  );
}
