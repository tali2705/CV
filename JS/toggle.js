const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => { 
  menu.style.transform =
    menu.style.transform === "translateX(0%)"
      ? "translateX(-100%)"
      : "translateX(0%)";
});
