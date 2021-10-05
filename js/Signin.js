let SigInBtn = document.querySelector(".headerMenuSignInBtn");
let modalSignIn = document.querySelector(".modalSignIn");
let menuCancelBtn = document.querySelector(".menuSignInCancelBtn");
let backdrop = document.querySelector(".backdropSignIn");

let openLogInWindow = () => {
  modalSignIn.style.display = "flex"; //open window
  menuCancelBtn.addEventListener("click", closeLogInWindow); //Listen click for close btn
  window.addEventListener("keydown", (event) => {
    //Listen esc for close
    if (event.code === "Escape") {
      closeLogInWindow();
    }
  });
  backdrop.addEventListener("click", closeLogInWindow); //Listen backdrop click for close btn
};

let closeLogInWindow = () => {
  modalSignIn.style.display = "none"; // close window
  menuCancelBtn.removeEventListener("click", closeLogInWindow); // remove click listener
  window.removeEventListener("keydown", (event) => {
    // remove esc listener
    if (event.code === "Escape") {
      closeLogInWindow();
    }
  });
  backdrop.removeEventListener("click", closeLogInWindow); //Remove backdrop click for close btn
};

SigInBtn.addEventListener("click", openLogInWindow); //Listen click for open window
