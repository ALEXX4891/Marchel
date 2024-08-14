// import * as flsFunctions from "./modules/functions.js";
// flsFunctions.isWebp();
// console.log(1);

//проверка на поддержку webp браузером, добавление класса webp или no-webp в <html>
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
// добавление класса webp или no-webp для <html>
testWebP(function (support) {
  let className = support === true ? "webp" : "no-webp";
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
  const filterDropdownItems = document.querySelectorAll(
    ".filter__dropdown-item"
  );

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
        if (
          item.innerText.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          filterDropdownList.append(item);
        }

        item.addEventListener("click", function (e) {
          input.value = e.target.innerText.trim();
          filterDropdownList.classList.remove("filter__dropdown_active");
          inpetSearchBtn.style.display = "none";
          inputCloseBtn.style.display = "block";
        });
      });

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
//--------------------------Запрос к БД----------------------------
// Загружаем список из БД:
async function fetchToDB(options) {
  // Блок try выполнится полностью, если не будет ошибок:
  try {
    // Выполняем запрос:
    const responce = await fetch("files/main.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    });
    const infoList = await responce.json();
    return infoList; // Возвращаем результат запроса
  } catch (err) {
    // Блок catch сработает только если будут какие-то ошибки в блоке try:
    // Выведем в консоли информацию об ошибке:
    console.log("При запросе к БД произошла ошибка, детали ниже:");
    console.error(err);
    // Вернем исключение с текстом поясняющим детали ошибки:
    alert("Произошла ошибка при запросе к БД!");
    throw new Error("Запрос завершился неудачно.");
  }
}

// ------------------------------ start контакты на сайте-------------------------------
let optionsContacts = {
  // опции для получения списка всех контрагентов
  function: "getAll",
  table: "contacts",
  all: "*",
};

const contacts = await fetchToDB(optionsContacts);
const contactsForRender = [...contacts];
// console.log(contactsForRender);

const phone_1 = contactsForRender.filter((item) => {
  return item.name === "phone_1";
});

const email_1 = contactsForRender.filter((item) => {
  return item.name === "email_1";
});

const phoneInfo = document.querySelectorAll(".phone-info");
if (phoneInfo) {
  phoneInfo.forEach((item) => {
    item.innerHTML = phone_1[0].value;
    item.setAttribute("href", `tel:${phone_1[0].value}`);
  });
}

const emailInfo = document.querySelectorAll(".email-info");
if (emailInfo) {
  emailInfo.forEach((item) => {
    item.innerHTML = email_1[0].value;
    item.setAttribute("href", `mailto:${email_1[0].value}`);
  });
}

const popup = document.querySelector(".popup");
if (popup) {
  const popupTel = document.querySelector(".popup__icon-link_tel");
  if (popupTel) {
    popupTel.setAttribute("href", `tel:${phone_1[0].value}`);
  }
}

const telegramInfo = document.querySelectorAll(".telegram-info");
if (telegramInfo) {
  telegramInfo.forEach((item) => {
    // item.innerHTML = phone_1[0].value;
    item.setAttribute(
      "href",
      `https://t.me/+${phone_1[0].value.replace(/[^0-9]/g, "")}`
    );
  });
}

const whatsappInfo = document.querySelectorAll(".whatsapp-info");
if (whatsappInfo) {
  whatsappInfo.forEach((item) => {
    // item.innerHTML = phone_1[0].value;
    item.setAttribute(
      "href",
      `https://api.whatsapp.com/send?phone=${phone_1[0].value.replace(
        /[^0-9]/g,
        ""
      )}`
    );
  });
}

const viberInfo = document.querySelectorAll(".viber-info");
if (viberInfo) {
  viberInfo.forEach((item) => {
    // item.innerHTML = phone_1[0].value;
    item.setAttribute(
      "href",
      `viber://chat?number=%2B${phone_1[0].value.replace(/[^0-9]/g, "")}`
    );
  });
}

// ------------------------------ end контакты на сайте-------------------------------

// ------------------------------ start услуги на сайте-------------------------------
let optionsServices = {
  // опции для получения списка всех контрагентов
  function: "getAll",
  table: "services",
  all: "*",
};

const services = await fetchToDB(optionsServices);
const servicesForRender = [...services];
// console.log(servicesForRender);

const servicesCardWrap = document.querySelector(".services__card-wrap");
if (servicesCardWrap) {
  servicesCardWrap.innerHTML = "";
  servicesForRender.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("services__card", "swiper-slide");
    card.setAttribute("data-services", `${item.type}`);
    card.innerHTML = `
      <img class="services__img" src="img/${item.photo}" alt="${item.name}">
      
      <a class="services__card-link" href="services-item.html?id=${item.id}">
      <p class="services__card-title">
        ${item.name}
      </p>
        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.9884 3.15206C17.0724 2.60619 16.6979 2.09561 16.1521 2.01163L7.25671 0.643113C6.71085 0.559134 6.20026 0.933565 6.11628 1.47943C6.03231 2.02529 6.40674 2.53588 6.9526 2.61986L14.8596 3.83631L13.6431 11.7433C13.5591 12.2891 13.9336 12.7997 14.4794 12.8837C15.0253 12.9677 15.5359 12.5933 15.6199 12.0474L16.9884 3.15206ZM1.59136 14.8064L16.5914 3.8064L15.4086 2.19359L0.408636 13.1936L1.59136 14.8064Z" fill="white"></path>
        </svg>
      </a>
    `;

    servicesCardWrap.append(card);
  });
}

const serviceItemPage = document.querySelector(".services-item-page");
if (serviceItemPage) {
  var url = new URL(window.location.href);
  const id = url.searchParams.get("id");
  // console.log(id);
  const service = servicesForRender.find((item) => item.id == id);
  // console.log(service);
  const photo = serviceItemPage.querySelector(".banner__photo");
  const name = serviceItemPage.querySelector(".banner__title");
  const description = serviceItemPage.querySelector(".banner__text");
  const title_1 = serviceItemPage.querySelector(".work__title");
  const title_2 = serviceItemPage.querySelector(".article__title");
  const text = serviceItemPage.querySelector(".article__card-text");

  photo.setAttribute("src", `img/${service.photo}`);
  name.textContent = service.name;
  description.textContent = service.description;
  title_1.textContent = service.title_1;
  title_2.textContent = service.title_2;
  text.textContent = service.text;
}

// ------------------------------ end услуги на сайте-------------------------------
// ------------------------------ start новости на сайте-------------------------------
let optionsNews = {
  // опции для получения списка всех контрагентов
  function: "getAll",
  table: "news",
  all: "*",
  limit: 3,
  order: "date",
  dir: "asc",
  sort: "date",
  offset: 0,
};

const news = await fetchToDB(optionsNews);
let newsForRender = [...news];
// console.log(newsForRender);

const newsCardWrap = document.querySelector(".news__card-wrap");
if (newsCardWrap) {

  function getNewsCard(item) {
    return `
      <div class="news__card-img-wrap">
        <img class="news__card-img" src="img/${item.photo}" alt="${item.name}">
      </div>
      <p class="news__card-date">
        ${item.date}
      </p>
      <h3 class="news__card-title">
        ${item.name}
      </h3>
      <a class="news__card-link" href="news-item.html?id=${item.id}">
        <p class="news__link-title">
          Читать новость
        </p>
        <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 13.5H19.5M19.5 13.5L15.5 10M19.5 13.5L15.5 17" stroke="#777E85"></path>
        </svg>
      </a> 
      `;
  }

  if (window.location.href.includes("o-nas.html")) {
    newsForRender = newsForRender
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .splice(0, 3);
  }

  if (window.location.href.includes("news-item.html")) {
    newsForRender = newsForRender
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .splice(0, 3);
  }

  if (window.location.href.includes("novosti.html")) {
    newsForRender = newsForRender.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  newsCardWrap.innerHTML = "";
  newsForRender.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("news__card", "swiper-slide");
    card.innerHTML = getNewsCard(item);
    newsCardWrap.append(card);
  });

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

  const newsItemPage = document.querySelector(".news-item-page");
  if (newsItemPage) {
    var url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    // console.log(id);
    const newsItem = news.find((item) => item.id == id);
    // console.log(news);
    const photo = newsItemPage.querySelector(".content__img-wrap").querySelector("img");
    const date = newsItemPage.querySelector(".content__date");
    const title = newsItemPage.querySelector(".content__title");
    const text = newsItemPage.querySelector(".content__text");

    photo.setAttribute("src", `img/${newsItem.photo}`);
    date.textContent = newsItem.date;
    title.textContent = newsItem.name;
    text.textContent = newsItem.text;
  }


}

// --------------------------------- end новости на сайте-------------------------------

// console.log(options);
// await fetchToDB(options);
// требуется подключить скрипт как модуль, иначе await не работает!!!
//--------------------------end Запрос к БД----------------------------
