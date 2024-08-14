// import * as flsFunctions from "./modules/functions.js";
// flsFunctions.isWebp();
// console.log(1);

//проверка на поддержку webp браузером, добавление класса webp или no-webp в <html>
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
// добавление класса webp или no-webp для <html>
testWebP(function (support) {
  let className = support === true ? 'webp' : 'no-webp';
  document.documentElement.classList.add(className);
});


// -------------------------------------------- start Fancybox: ---------------------------------------------
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// -------------------------------------------- end Fancybox: ---------------------------------------------
// -------------------------------------------- start подсветка активного пункта меню:---------------------------------------------------------
const page = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((item) => {
  if (item.getAttribute("href").includes(page)) {
    item.classList.add("nav__link_active");
  }
});
// -------------------------------------------- end подсветка активного пункта меню:---------------------------------------------------------
// -------------------------------------------- start swiper: ---------------------------------------------
// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,
//   slidesPerView: 3,
//   spaceBetween: 30,
//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });


new Swiper(".news__slider", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  // allowTouchMove: true,
  slidesPerView: 3, // сколько слайдов показывать, можно дробно
  // slidesPerView: 'auto', // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  // centeredSlides: true, //выравнивание слайдов по центру
  // initialSlide: 1, //начальный слайд (c нуля)

  spaceBetween: 19,
  // slideToClickedSlide: true, //перелистывание слайдов по клику
  grabCursor: true, //меняет курсор при наведении на руку
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // mousewheel: { //перелистывание слайдов по мышке
  //   sensitivity: 1,
  //   eventsTarget: ".news__slider",
  // },
  // keyboard: { //перелистывание слайдов по нажатию клавиш
  //   enabled: true,
  //   onlyInViewport: true,
  //   // pageUpDown: true,
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
  },
});

new Swiper(".services__slider", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  // allowTouchMove: true,
  slidesPerView: 4, // сколько слайдов показывать, можно дробно
  // slidesPerView: 'auto', // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  // centeredSlides: true, //выравнивание слайдов по центру
  // initialSlide: 1, //начальный слайд (c нуля)

  spaceBetween: 19,
  // slideToClickedSlide: true, //перелистывание слайдов по клику
  grabCursor: true, //меняет курсор при наведении на руку
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // mousewheel: { //перелистывание слайдов по мышке
  //   sensitivity: 1,
  //   eventsTarget: ".news__slider",
  // },
  // keyboard: { //перелистывание слайдов по нажатию клавиш
  //   enabled: true,
  //   onlyInViewport: true,
  //   // pageUpDown: true,
  // },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 3,
    },
    960: {
      slidesPerView: 4,
    },
  },
});

// var swiper = new Swiper(".news__slider", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   centeredSlides: false,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// -------------------------------------------- end swiper: ---------------------------------------------
// -------------------------------------------- start popup: ---------------------------------------------
const popupLinks = document.querySelectorAll(".popup-link");
const lockPadding = document.querySelectorAll(".lock-padding");
const body = document.querySelector("body");

// const btn = document.querySelector(".project-btn");

let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName); //получаем id попап-окна
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".popup-close");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup")); //ближайший родитель класса popup
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      // закрываем текущий открытый попап, если он есть
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        // если клик был по области вокруг попапа то ничего не делаем
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

// добавляем боди padding-right при открытии попапа, на ширину скролл-бара
function bodyLock() {
  // console.log(window.innerWidth);
  // console.log(document.querySelector(".header").offsetWidth);
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".header").offsetWidth + "px";
  for (let index = 0; index < lockPadding.length; index++) {
    const el = lockPadding[index];
    el.style.marginRight = lockPaddingValue;
    // console.log(el.style.marginRight);
  }
  body.style.paddingRight = lockPaddingValue;
  // console.log(body.style.paddingRight);
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.marginRight = "0px";
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});
// -------------------------------------------- end popup: ---------------------------------------------

// -------------------------------------------- start gallery: ---------------------------------------------
const previews = document.querySelectorAll(".slider_img");

if (previews) {
  previews.forEach((item) => {
    item.addEventListener("click", function () {
      const imgBox = document
        .querySelector(".article__img")
        .querySelector("img");
      const img = item.querySelector("img").getAttribute("src");
      imgBox.setAttribute("src", img);
    });
  });
}

// -------------------------------------------- end gallery: ---------------------------------------------

// -------------------------------------------- start filter: ---------------------------------------------

const filterItems = document.querySelectorAll(".filter__link");

if (filterItems) {

  const cards = document.querySelectorAll(".services__card");
  let id = 0;
  let cardsLength = cards.length;
  const notFoundMessage = document.querySelector(".services__not-found");
  const addServToShowBtn = document.querySelector(".services__btn");

  const input = document.querySelector(".filter__input");
  const inpetSearchBtn = document.querySelector(".filter__icon_search");
  const inputCloseBtn = document.querySelector(".filter__icon_close");
  const filterDropdownList = document.querySelector(".filter__dropdown"); 
  const filterDropdownItems = document.querySelectorAll(".filter__dropdown-item");

  if (id == 0) {
    cards.forEach((item) => {
      item.style.display = "block";
    });
  }

  filterItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      cardsLength = 0;
      id = item.getAttribute("data-service");
      console.log(`id: ${id}`);
      cards.forEach((item) => {
        if (id == item.getAttribute("data-service")) {
          item.style.display = "block";
          cardsLength++;

        } else {
          item.style.display = "none";          
        }
      });
      // console.log(`cardsLength: ${cardsLength}`);
      if (cardsLength == 0) {
        notFoundMessage.style.display = "block";
        addServToShowBtn.style.display = "none";
      } else {
        notFoundMessage.style.display = "none";
        addServToShowBtn.style.display = "block";
      }
    });    
  });


  if (input) {
    input.addEventListener("input", function (e) {
      filterDropdownList.classList.add("filter__dropdown_active");
      filterDropdownList.innerHTML = "";
      filterDropdownItems.forEach((item) => {
        if (item.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
          filterDropdownList.append(item);
        }

        item.addEventListener("click", function (e) {
          input.value = e.target.innerText.trim();
          filterDropdownList.classList.remove("filter__dropdown_active");
          inpetSearchBtn.style.display = "none";
          inputCloseBtn.style.display = "block";
        });
      })
  
      if (e.target.value == "") {
        filterDropdownList.classList.remove("filter__dropdown_active");
      }
    });

    inputCloseBtn.addEventListener("click", function (e) {
      input.value = "";
      filterDropdownList.classList.remove("filter__dropdown_active");
      inpetSearchBtn.style.display = "block";
      inputCloseBtn.style.display = "none";
    });

    filterDropdownItems.forEach((item) => {
        item.addEventListener("click", function (e) {
          // console.log(e.target.getAttribute("data-service"));
          id = item.getAttribute("data-service");
          cards.forEach((item) => {
            if (id == item.getAttribute("data-service")) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          });

      });
    });
  }


}
// -------------------------------------------- end filter ---------------------------------------------

// -------------------------------------------- start BURGER: ---------------------------------------------

const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header__nav");

if (burger) {
  burger.addEventListener("click", function (e) {
    burger.classList.toggle("burger_active");
    headerNav.classList.toggle("nav_active");
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".header__nav") && !e.target.closest(".burger")) {
      burger.classList.remove("burger_active");
      headerNav.classList.remove("nav_active");
    }
  });
}
// -------------------------------------------- end BURGER ---------------------------------------------

// -------------------------------------------- start Search: ---------------------------------------------
const headerSearchWrap = document.querySelector(".header__search-form-wrap");

if (headerSearchWrap) {
  if (window.screen.width <= 920) {
    headerSearchWrap.addEventListener("click", function (e) {
      headerSearchWrap.classList.add("header__search-form-wrap_active");
      console.log("200");
    });
  }

  const closeSearchBtn = headerSearchWrap.querySelector(
    ".search-form__close-btn"
  );
  const inputField = headerSearchWrap.querySelector(".search-form__input");

  if (closeSearchBtn) {
    closeSearchBtn.addEventListener("click", function (e) {
      // e.preventDefault();
      headerSearchWrap.classList.remove("header__search-form-wrap_active");
      inputField.value = "";
      console.log("100");
      e.stopPropagation();
    });
  }

  document.addEventListener("click", function (e) {
    if (
      !e.target.closest(".search-form") &&
      headerSearchWrap.classList.contains("header__search-form-wrap_active")
    ) {
      headerSearchWrap.classList.remove("header__search-form-wrap_active");
      inputField.value = "";
      console.log("400");
    }
  });
}

// -------------------------------------------- end Search ---------------------------------------------

// -------------------------------------------- start меню: ---------------------------------------------

const menuTowns = document.querySelectorAll(".nav__item_town");

if (menuTowns) {
  let key = false;
  menuTowns.forEach((town) => {
    town.addEventListener("click", function (e) {
  // town.classList.add("nav__item_town_active");

      key = !key;
      console.log(key);
      if (key) {
        menuTowns.forEach((town) => {
          town.classList.add("nav__item_town_show");
        });
      } else {
        menuTowns.forEach((town) => {
          town.classList.remove("nav__item_town_show");
        });
      }
      setTownSelected(town, key);
    });
  });
}

function setTownSelected(town, key) {
  menuTowns.forEach((item) => {
    item.classList.remove("nav__item_town_selected");
    item.classList.remove("nav__item_town_active");
  });
  town.classList.add("nav__item_town_selected");

  if (key) {
    town.classList.add("nav__item_town_active");
  }
}

// -------------------------------------------- end меню ---------------------------------------------

$("#phone_1").mask("+7(999) 999 99 99");
$("#phone_2").mask("+7(999) 999 99 99");

// -------------------------------------------- start Куки: ---------------------------------------------
function setCookie(name, value, lifetimeDays = 30, path = "/") {
  var expires = "";
  if (lifetimeDays) {
    var date = new Date();
    date.setTime(date.getTime() + lifetimeDays * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=" + path;
}

function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

if (!getCookie("CookiePolicyAccepted")) {
  $(".cookie").show();
} else {
  $(".cookie").hide();
}

function acceptCookiePolicy() {
  // console.log("acceptCookiePolicy");
  setCookie("CookiePolicyAccepted", true);
  $(".cookie").fadeTo(500, 0);
  setTimeout(() => {
    $(".cookie").hide();
  }, 500);
}
function closeCookiePolicyNotification() {
  // console.log("closeCookiePolicyNotification");
  $(".cookie").fadeOut(300);
}

const cookieBtn = document.querySelector(".cookie__btn");
if (cookieBtn) {
  cookieBtn.addEventListener("click", function (e) {
    e.preventDefault();
    acceptCookiePolicy();
  });
}

const cookieCloseBtn = document.querySelector(".cookie__close");
if (cookieCloseBtn) {
  cookieCloseBtn.addEventListener("click", function (e) {
    e.preventDefault();
    closeCookiePolicyNotification();
  });
}
// -------------------------------------------- end Куки ---------------------------------------------
