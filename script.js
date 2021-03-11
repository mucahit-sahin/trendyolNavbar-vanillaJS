const user = document.querySelector(".user");
const userMenu = document.querySelector(".userMenu");

user.addEventListener("mouseenter", () => {
  user.classList.add("active");
});
user.addEventListener("mouseleave", () => {
  user.classList.remove("active");
});
