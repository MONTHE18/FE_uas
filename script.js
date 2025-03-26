/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

// ===== MENU SHOW ==== //
// validate if constant; exists //
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// ======= MENU HIDDEN ====== //
// Validate if constant exists //
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

//
var swiper = new Swiper('.home-slider', {
  grabCursor: true,
  loop: true,
  cnteredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// end

// // shoping
// const openShopping = document.querySelector('.openShopping');
// const closeShopping = document.querySelector('.closeShopping');
// const list = document.querySelector('.list');
// const listCard = document.querySelector('.listCard');
// const total = document.querySelector('.total');
// const body = document.querySelector('body');
// const quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', () => {
//   body.classList.add('active');
// });
// closeShopping.addEventListener('click', () => {
//   body.classList.remove('active');
// });

// let prodcuts = [
//   {
//     id: 1,
//     name:"PRODUCT 1",
//     images:"1.PNG",
//     price: 2000
//   },
//   {
//     id: 1,
//     name:"PRODUCT 1",
//     images:"1.PNG",
//     price: 2000
//   },
//   {
//     id: 1,
//     name:"PRODUCT 1",
//     images:"1.PNG",
//     price: 2000
//   },
//   {
//     id: 1,
//     name:"PRODUCT 1",
//     images:"1.PNG",
//     price: 2000
//   },
//   {
//     id: 1,
//     name:"PRODUCT 1",
//     images:"1.PNG",
//     price: 2000
//   },
//   {
//     id: 1,
//     name:"PRODUCT 1",
//     images:"1.PNG",
//     price: 2000
//   },
//   {
//     id: 1,
//     name:"PRODUCT 1",
//     images:"1.PNG",
//     price: 2000
//   },
//   {
//     id: 1,
//     name:"PRODUCT 1",
//     images:"1.PNG",
//     price: 2000
//   },
// ];
