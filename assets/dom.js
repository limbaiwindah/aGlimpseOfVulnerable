document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".stickyNav");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
});