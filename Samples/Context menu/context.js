const menu = document.querySelector(".context-menu");
const container = document.querySelector(".container");


container.addEventListener("contextmenu", function(e){
  e.preventDefault();
  menu.style.display = "block";
  menu.style.transform = "translate(0)";
  if ((window.innerWidth - e.clientX) > menu.offsetWidth + 10){
    menu.style.left = e.clientX + "px";
  }
  else
  {
    menu.style.left = (e.clientX - menu.offsetWidth) + "px";
  }
  if ((window.innerHeight - e.clientY) > menu.offsetHeight + 10){
    menu.style.top = e.clientY + "px";
  }
  else
  {
    menu.style.top = (e.clientY - menu.offsetHeight) + "px";
  }
})

window.addEventListener("click", function(){
  menu.style.display = "none";
})