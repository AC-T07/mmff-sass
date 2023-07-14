const navbar = document.querySelector(".navigation-container");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", function (e) {
  e.preventDefault();
  const check = toggle.getAttribute("data-toggle");
  if (check == "false") {
    navbar.setAttribute("data-expended", true);
    toggle.setAttribute("data-toggle", true);
  } else {
    navbar.setAttribute("data-expended", false);
    toggle.setAttribute("data-toggle", false);
  }
});
