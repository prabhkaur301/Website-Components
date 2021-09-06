
var hamburger=document.querySelector(".hamburger");

hamburger.addEventListener('click',()=>{
  
var navlinks=document.querySelector(".navlinks");
navlinks.classList.toggle("over");
var icon=document.querySelector(".hamburger i")
icon.classList.toggle("fa-times");

})