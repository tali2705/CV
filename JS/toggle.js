function toggleMenu() {
  const menu = document.getElementById("menu");
  const body = document.body;
  const footer = document.querySelector("footer");
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    body.style.overflow = "hidden";
    footer.style.display = "none";
  } else {
    body.style.overflow = "auto";
    footer.style.display = "flex";
  }
}
