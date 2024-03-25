// mobile menu
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hlink = document.querySelectorAll("#hlink");
const faSolid = document.querySelector(".fa-solid");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
});

hlink.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    faSolid.classList.toggle("fa-xmark");
  });
});

// story Image of products

const goodsTexts = document.getElementsByClassName("goods-text");
const goodsPics = document.getElementsByClassName("goods-pic");

function showImg(){
  for(goodsPic of goodsPics){
    goodsPic.classList.remove("active-pic");
  }

  for(goodstext of goodsTexts){
    goodstext.classList.remove("active-text");
  }
  let i = Array.from(goodsPics).indexOf(event.target);
  goodsPics[i].classList.add('active-pic');
  goodsTexts[i].classList.add('active-text');
};