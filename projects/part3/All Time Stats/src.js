const menuToggle = document.getElementById("menuToggle");
const hamburgerDropdown = document.getElementById("hamburgerDropdown");

menuToggle.onclick = function () {
  hamburgerDropdown.classList.toggle("show");
};
