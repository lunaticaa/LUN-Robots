// mobile menu
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hlink = document.querySelectorAll("#hlink");
const faSolid = document.querySelector(".fa-solid");
const navbar = document.querySelector('header');


hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
  navbar.classList.toggle("headers");
  hamburger.classList.toggle("h-full");
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

//  sticky header
window.onscroll = () => {
  if(window.scrollY > 100) {
    navbar.classList.add('bg-color-primary-dark');
    navbar.classList.add('border-b');
    navbar.classList.add('border-color-gray');
  } else{
    navbar.classList.remove('border-b');
    navbar.classList.remove('border-color-gray');
    navbar.classList.remove('bg-color-primary-dark');
  }
}

// register animation forms 
