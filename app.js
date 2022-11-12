const buttonMenu = document.querySelector('.menu');
const menuL = document.querySelector('.menulist');
const closed = document.querySelector('.close');
const containerColor = document.querySelector('.container');


buttonMenu.addEventListener('click', function(){

  if(menuL.style.display === "none")
  {
      menuL.style.display = "block";
      containerColor.classList.add("menulistbackground");
      
  }
  else
  {
    menuL.style.display = "none";
  }

  

  

});

closed.addEventListener('click', function(){

  if(menuL.style.display === "block")
  {
    menuL.style.display = "none";
  }
});

