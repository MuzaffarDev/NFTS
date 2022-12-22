// header buttonlari activ  holatga keltiradigan js code

let itemBtn = document.querySelectorAll(".header__menu-item");

itemBtn.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
});


// burger menu
document.querySelector(".header__open-menu").addEventListener("click", () => {
  let header = document.querySelector(".header").classList.add("show");
});
document.querySelector(".header__close-menu").addEventListener("click", () => {
  let header = document.querySelector(".header").classList.remove("show");
});

//  modal section
let elModalOpenBtn = document.querySelector(".open");
let elModalCloseBtn = document.querySelector(".close");
let elModal = document.querySelector(".modal");
let elModalWrapper = document.querySelector(".modal__wrapper");

elModalOpenBtn.addEventListener("click", () => {
  elModal.classList.add("show");
  // elModalWrapper.style.top = "30%";
});

elModalCloseBtn.addEventListener("click", () => {
  elModalWrapper.style.top = "40%";
  setTimeout(() => {
    elModal.classList.remove("show");
  }, 200);
});
