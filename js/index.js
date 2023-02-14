let slides = document.querySelectorAll(".offer__slide");
let prev = document.querySelector(".offer__slider-prev");
let next = document.querySelector(".offer__slider-next");

let slideIndex = 1;

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => slide.classList.add("hide"));

  console.log(n);
  slides[slideIndex - 1].classList.remove("hide");
  slides[slideIndex - 1].classList.add("fade");
}
showSlides(slideIndex);

next.onclick = () => {
  slideIndex++;
  showSlides(slideIndex);
};
prev.onclick = () => {
  slideIndex--;
  showSlides(slideIndex);
};

let modalWindow = document.querySelector(".modal");
let openBtnWhite = document.querySelector(".btn_white");
let closeBtnWhite = document.querySelector(".modal__close");
let openBtnDark = document.querySelector(".btn_dark");
let closeBtnDark = document.querySelector(".modal__close");
let modalBg = document.querySelector(".modal__bg");

openBtnWhite.onclick = () => {
  modalWindow.style.display = "flex";
  modalBg.style.display = "block";

  setTimeout(() => {
    modalWindow.style.opacity = "1";
    modalBg.style.opacity = "1";
    modalWindow.style.scale = "1";
    modalWindow.style.rotate = "0deg";
  }, 200);
};

closeBtnWhite.onclick = () => {
  modalWindow.style.display = "none";
  modalWindow.style.rotate = "360deg";
  modalWindow.style.scale = ".2";
  modalWindow.style.opacity = "0";
  modalBg.style.opacity = "0";

  setTimeout(() => {
    modalWindow.style.display = "none";
    modalBg.style.display = "none";
  }, 200);
};

openBtnDark.onclick = () => {
  modalWindow.style.display = "flex";
  modalBg.style.display = "block";

  setTimeout(() => {
    modalBg.style.display = "none";
    modalWindow.style.opacity = "1";
    modalBg.style.opacity = "1";
    modalWindow.style.scale = "1";
    modalWindow.style.rotate = "0deg";
  }, 200);
};

closeBtnDark.onclick = () => {
  modalWindow.style.display = "none";
  modalWindow.style.rotate = "360deg";
  modalWindow.style.scale = "2";
  modalWindow.style.opacity = "0";
  modalBg.style.opacity = "0";

  setTimeout(() => {
    modalBg.style.display = "none";
  }, 200);
};

let foodImgs = document.querySelectorAll(".tabcontainer .tabcontent");
let tabheader__items = document.querySelectorAll("div[data-type]");
let tabcontentFood = document.querySelectorAll(
  ".tabcontainer .tabcontent__descr"
);

foodImgs.forEach((el) => el.classList.add("hide"));
foodImgs[0].classList.remove("hide");

tabheader__items.forEach((item) => {
  item.onclick = () => {
    let key = item.getAttribute("data-type");
    let tabContent = foodImgs[key];

    foodImgs.forEach((el) => el.classList.add("hide"));

    tabContent.classList.remove("hide");
    tabContent.classList.add("show", "fade");

    tabheader__items.forEach((i) =>
      i.classList.remove("tabheader__item_active")
    );

    item.classList.add("tabheader__item_active");
  };
});
