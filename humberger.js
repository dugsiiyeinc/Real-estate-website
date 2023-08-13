const menu_btn =document.querySelector(".hamburger")
const mobileNav =document.querySelector(".mobile-nav")









menu_btn.addEventListener ('click', function(){
     
   menu_btn.classList.toggle('is-active');
   mobileNav.classList.toggle('is-active');
   
})




