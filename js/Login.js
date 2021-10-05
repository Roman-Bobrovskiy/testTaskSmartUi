let LoginBtn = document.querySelector(".headerMenuLogInBtn");
let modalLogIn = document.querySelector(".modalLogIn");
let menuCancelBtn = document.querySelector(".menuCancelBtn");
let backdrop = document.querySelector(".backdrop");

let openLogInWindow = () => {
  modalLogIn.style.display = "flex"; //open window
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
  modalLogIn.style.display = "none"; // close window
  menuCancelBtn.removeEventListener("click", closeLogInWindow); // remove click listener
  window.removeEventListener("keydown", (event) => {
    // remove esc listener
    if (event.code === "Escape") {
      closeLogInWindow();
    }
  });
  backdrop.removeEventListener("click", closeLogInWindow); //Remove backdrop click for close btn
};

LoginBtn.addEventListener("click", openLogInWindow); //Listen click for open window
