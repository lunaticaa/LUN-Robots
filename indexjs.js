// mobile menu
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hlink = document.querySelector("#hlink");
const faSolid = document.querySelector(".fa-solid");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
});

hlink.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    faSolid.classList.toggle("fa-xmark");
  })

})