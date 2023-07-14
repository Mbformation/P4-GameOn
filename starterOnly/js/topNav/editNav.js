/* EditNavigation function for burger menu on responsive */
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const burgerMenu = document.querySelector(".icon");

// launch burger menu
burgerMenu.addEventListener("click", editNav);
