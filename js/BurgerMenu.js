let burgerMenuBtn = document.querySelector(".headerBurgerMenuBtn");
let burgerMenu = document.querySelector(".burgerMenu");
let burgerMenuCloseBtn = document.querySelector(".burgerMenuCloseBtn");

let handleMenyBtn = () => {
  burgerMenu.style.right = "-50px"; //show window
  burgerMenuBtn.style.opacity = "0"; //hide burger btn
  burgerMenuCloseBtn.addEventListener("click", closeBurregMenu); //Listen close btn for close
  window.addEventListener("keydown", (event) => {
    //Listen esc for close
    if (event.code === "Escape") {
      closeBurregMenu();
    }
  });
};

let closeBurregMenu = () => {
  burgerMenu.style.right = "-300px"; //hide window
  burgerMenuBtn.style.opacity = "100"; //show burger btn
  burgerMenuCloseBtn.removeEventListener("click", closeBurregMenu); //remove close btn listener
  window.removeEventListener("keydown", (event) => {
    // remove esc listener
    if (event.code === "Escape") {
      closeBurregMenu();
    }
  });
};

burgerMenuBtn.addEventListener("click", handleMenyBtn);
