const btn = document.getElementById("burgerBtn");
const menu = document.getElementById("mobileMenu");

btn.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  btn.classList.toggle("open", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    btn.classList.remove("open");
    document.body.style.overflow = "";
  });
});
