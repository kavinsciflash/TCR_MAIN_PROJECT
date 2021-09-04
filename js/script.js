let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
const header = document.querySelector('header');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
    
  }

});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  },
  loop:true,
  autoplay:{
    delay: 2000,
    disableOnInteraction:false,
  }
});

var swiper = new Swiper(".sub-slider", {
  effect: "cube",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
    delay: 2000,
    disableOnInteraction:false,
  }
});

var swiper = new Swiper(".base-slider", {
  effect: "fade",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  },
  loop:true,
  autoplay:{
    delay: 2000,
    disableOnInteraction:false,
  }
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },    
    },
    autoplay:{
      delay: 1000,
      disableOnInteraction:false,
  }
});

var swiper1 = new Swiper(".preview-slider", {
  effect : "fade",
  slidesPerView: 1,
  grabCursor: true,
  loop:true,
  spaceBetween: 10,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },    
  },
  autoplay:{
    delay: 1000,
    disableOnInteraction:false,
}
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} 
  else {
		header.style.backgroundColor = 'transparent';   
	}
});

window.addEventListener('scroll',()=>{
  let content = document.querySelector('.service');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(contentPosition < screenPosition){
    content.classList.add('active');
  }
  else{
    content.classList.remove('active');
  }
});

window.addEventListener('scroll',()=>{
  let content = document.querySelector('.about');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(contentPosition < screenPosition){
    content.classList.add('active');
  }
  else{
    content.classList.remove('active');
  }
});

window.addEventListener('scroll',()=>{
  let content = document.querySelector('.price');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(contentPosition < screenPosition){
    content.classList.add('active');
  }
  else{
    content.classList.remove('active');
  }
});

window.addEventListener('scroll',()=>{
  let content = document.querySelector('.contact');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(contentPosition < screenPosition){
    content.classList.add('active');
  }
  else{
    content.classList.remove('active');
  }
});
