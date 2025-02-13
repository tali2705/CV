function toggleMenu() {
  const menu = document.getElementById("menu");
  const body = document.body;

  const menuStatus = menu.style.transform === "translateX(0%)";

  menu.style.transform = menuStatus ? "translateX(-100%)" : "translateX(0%)";

  if (menuStatus) {
    body.style.overflow = "auto";
  } else {
    body.style.overflow = "hidden";
  }
}
