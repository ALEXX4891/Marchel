Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

//подсветка активного пункта меню:---------------------------------------------------------
const body = document.querySelector("body");
const page = body.getAttribute("data-page");
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((item) => {
  if (item.getAttribute("href") === `${page}.html`) {
    item.classList.add("nav__link_active");
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  allowTouchMove: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// -------------------------------------------- start popup: ---------------------------------------------
const popupLinks = document.querySelectorAll(".popup-link");
const lockPadding = document.querySelectorAll(".lock-padding");
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

// -------------------------------------------- start btn_montage: ---------------------------------------------

// -------------------------------------------- end btn_montage ---------------------------------------------

// -------------------------------------------- start корзина: ---------------------------------------------

// const headerCartBtn = document.querySelector(".btn__cart");
// function setCartActive() {
//   headerCartBtn.classList.add("btn__cart_active");
// }
// function setCartEmpty() {
//   headerCartBtn.classList.remove("btn__cart_active");
// }
// headerCartBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   window.location.href = "cart.html";
// });

// const cartItemDelBtns = document.querySelectorAll(".card__del-btn");
// if (cartItemDelBtns) {
//   cartItemDelBtns.forEach((item) => {
//     const el = item.closest(".cart__card");
//     item.addEventListener("click", function (e) {
//       e.preventDefault();
//       el.remove();
//       getTotalCost();
//     });
//   });
// }

// const cartCards = document.querySelectorAll(".cart__card");

// if (cartCards.length) {
//   // console.log(cartCards);
//   const btnMontage = document.querySelectorAll(".btn_montage");
//   if (btnMontage) {
//     btnMontage.forEach((item) => {
//       // изменение вида кнопки при клике:
//       item.addEventListener("click", function () {
//         item.classList.toggle("btn_montage_active");
//         // const cost = item.closest(".cart__card").querySelector(".card__cost");
//         // let quontity = item
//         //   .closest(".cart__card")
//         //   .querySelector(".card__counter-value").value;
//         // console.log(quontity);
//         getTotalCost();
//       });
//     });
//   }

//   cartCards.forEach((item) => {
//     // счетчик количества карточек в корзине:
//     const plus = item.querySelector(".card__counter-btn_plus");
//     const minus = item.querySelector(".card__counter-btn_minus");
//     const counterValue = item.querySelector(".card__counter-value");
//     let quontity = 0;

//     counterValue.addEventListener("input", function (e) {
//       if (Number(counterValue.value) <= 0) {
//         quontity = 0;
//         counterValue.value = 0;
//       } else {
//         quontity = counterValue.value;
//       }
//       getCost(item, quontity);
//       getTotalCost();
//     });

//     plus.addEventListener("click", function () {
//       quontity++;
//       counterValue.value = quontity;
//       getCost(item, quontity);
//       getTotalCost();
//       setCartActive();
//     });
//     minus.addEventListener("click", function () {
//       if (counterValue.value > 0) {
//         quontity--;
//         counterValue.value = quontity;
//         getCost(item, quontity);
//         getTotalCost();
//       }
//     });
//   });
// }

// // вычисление стоимости товара в корзине, в зависимости от количества:
// function getCost(item, quontity) {
//   console.log("getCost");
//   const cost = item.querySelector(".card__cost");
//   const priceText = item.querySelector(".card__price").innerHTML;
//   const price = parseInt(priceText.replace(/\s/g, ""));
//   cost.innerHTML = (price * quontity).toLocaleString();
// }

// // вычисление общей стоимости товаров в корзине:
// function getTotalCost() {
//   // console.log(55);
//   let total = 0;
//   const totalCost = document.querySelector(".form__cost-value");
//   let allCosts = document.querySelectorAll(".card__cost");

//   allCosts.forEach((item) => {
//     total += parseInt(item.innerHTML.replace("&nbsp;", ""));
//     totalCost.innerHTML = total.toLocaleString();
//   });
//   if (total === 0) {
//     setCartEmpty();
//     totalCost.innerHTML = "0";
//   }
// }

// -------------------------------------------- end корзина ---------------------------------------------

// -------------------------------------------- start О компании: ---------------------------------------------

const btns = document.querySelectorAll(".stage__item");

const articles = document.querySelectorAll(".stage__article");

if (btns.length) {
  console.log(btns);
  btns.forEach((item) => {
    item.addEventListener("click", function () {
      btns.forEach((item) => {
        item.classList.remove("stage__item_active");
      });
      const id = item.getAttribute("data-id");
      articles.forEach((item) => {
        item.classList.remove("stage__article_active");
        if (item.getAttribute("data-id") === id) {
          item.classList.add("stage__article_active");
        }
      });
      // document.querySelector(`.stage__article[data-id="${id}"]`).classList.add("stage__article_active");
      item.classList.toggle("stage__item_active");
    });
  });
}
// -------------------------------------------- end О компании ---------------------------------------------

// -------------------------------------------- start Отзывы: ---------------------------------------------

document.addEventListener("click", function (e) {
  // закрытие отзывов при клике на другой елемент:
  if (!e.target.closest(".card_about_open")) {
    const cardsFeedback = document.querySelectorAll(".card_about");

    cardsFeedback.forEach((item) => {
      item.classList.remove("card_about_open");
    });
  }

  // открытие отзывов:
  const openBtns = document.querySelectorAll(".feedback-btn_open");
  if (openBtns) {
    openBtns.forEach((item) => {
      if (e.target.closest(".feedback-btn_open") == item) {
        const card = item.closest(".card_about");
        const truthCardTextBlock = card.querySelector(".card__desc_hide");
        const truthCardText = truthCardTextBlock.textContent;
        const cardTextBlockForShow = card.querySelector(".card__desc_show");
        card.classList.add("card_about_open");
        cardTextBlockForShow.textContent = truthCardText;
      }
    });
  }

  // закрытие отзывов:
  const closeBtns = document.querySelectorAll(".feedback-btn_close");
  if (closeBtns) {
    closeBtns.forEach((item) => {
      if (e.target.closest(".feedback-btn_close") == item) {
        const card = item.closest(".card_about");
        const truthCardTextBlock = card.querySelector(".card__desc_hide");
        const truthCardText = truthCardTextBlock.textContent;
        const cardTextBlockForShow = card.querySelector(".card__desc_show");
        card.classList.remove("card_about_open");
        const cardTextTrim = truthCardText.slice(0, 140) + "...";
        cardTextBlockForShow.textContent = cardTextTrim;
      }
    });
  }
});

// форматирование отзывов при загрузке страницы:
const cardsFeedback = document.querySelectorAll(".card_about");
if (cardsFeedback.length) {
  cardsFeedback.forEach((item) => {
    const truthCardTextBlock = item.querySelector(".card__desc_hide");
    const truthCardText = truthCardTextBlock.textContent;
    // console.log(truthCardText);
    const cardTextBlockForShow = item.querySelector(".card__desc_show");

    if (truthCardText.length > 160) {
      item.classList.add("card_about_overflow");
      const cardTextTrim = truthCardText.slice(0, 140) + "...";
      cardTextBlockForShow.textContent = cardTextTrim;
    } else {
      cardTextBlockForShow.textContent = truthCardText;
    }
  });
}

// -------------------------------------------- end Отзывы ---------------------------------------------

// -------------------------------------------- start Каталог: ---------------------------------------------
const catalog = document.querySelector(".catalog-all-main");
if (catalog) {
  const activOptionsItem = document.querySelectorAll(".activ-options__item");
  if (activOptionsItem) {
    activOptionsItem.forEach((item) => {
      const closeBtn = item.querySelector(".activ-options__icon");
      closeBtn.addEventListener("click", function () {
        item.remove();
      });
    });
  }

  const allActivOptionsDelBtn = document.querySelector(
    ".activ-options__del-all"
  );
  if (allActivOptionsDelBtn) {
    const closeBtn = allActivOptionsDelBtn.querySelector(
      ".activ-options__icon"
    );
    closeBtn.addEventListener("click", function () {
      activOptionsItem.forEach((item) => {
        item.remove();
      });
      allActivOptionsDelBtn.remove();
    });
  }

  const menuItem = catalog.querySelectorAll(".filter__item_head");
  menuItem.forEach((item) => {
    item.addEventListener("click", function () {
      menuItem.forEach((item) => {
        item.classList.remove("filter__item_head_active");
      });
      item.classList.add("filter__item_head_active");
    });
  });

  //открытие фильтра:
  const filterItem = catalog.querySelectorAll(".filter__item_body");
  filterItem.forEach((item) => {
    item.addEventListener("click", function (e) {
      //закрытие всех остальных фильтров:
      filterItem.forEach((item) => {
        if (item !== e.target.closest(".filter__item_body")) {
          item.classList.remove("filter__item_body_active");
          const arrow = item.querySelector(".filter__icon");
          arrow.classList.remove("filter__icon_active");
        }
      });

      item.classList.toggle("filter__item_body_active");
      const arrow = item.querySelector(".filter__icon");
      arrow.classList.toggle("filter__icon_active");
    });
  });

  // закрытие фильтра:
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      filterItem.forEach((item) => {
        item.classList.remove("filter__item_body_active");
        const arrow = item.querySelector(".filter__icon");
        arrow.classList.remove("filter__icon_active");
      });
    }
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".filter__item_body")) {
      filterItem.forEach((item) => {
        item.classList.remove("filter__item_body_active");
        const arrow = item.querySelector(".filter__icon");
        arrow.classList.remove("filter__icon_active");
      });
    }
  });

  const catalogCards = document.querySelectorAll(".catalog-all__item");

  if (catalogCards.length) {
    // console.log(catalogCards);
    catalogCards.forEach((item) => {
      const cartLinkBtn = item.querySelector(".in-cart__icon");
      cartLinkBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = cartLinkBtn.getAttribute("data-href");
      });

      const colorBtn = item.querySelectorAll(".card__color-item");
      if (colorBtn) {
        colorBtn.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            colorBtn.forEach((item) => {
              item.classList.remove("card__color-item_active");
            });
            item.classList.add("card__color-item_active");
          });
        });
      }

      const toCartBtn = item.querySelector(".card__btn_to-cart");
      toCartBtn.addEventListener("click", function (e) {
        e.preventDefault();
      });
      const cartBtn = item.querySelector(".card__btn_in-cart");
      cartBtn.addEventListener("click", function (e) {
        e.preventDefault();
      });

      // счетчик количества карточек в корзине:
      const plus = item.querySelector(".card__counter-btn_plus");
      const minus = item.querySelector(".card__counter-btn_minus");
      const counterValue = item.querySelector(".card__counter-value");
      let quontity = 0;

      // counterValue.addEventListener("change", function (e) {
      //   quontity = e.target.value;
      // });
      counterValue.addEventListener("input", function (e) {
        if (Number(counterValue.value) <= 0) {
          quontity = 0;
          counterValue.value = "";
        } else {
          quontity = counterValue.value;
        }
      });

      plus.addEventListener("click", function (e) {
        e.preventDefault();

        quontity++;
        counterValue.value = quontity;
        // getCost(item, quontity);
        // getTotalCost();
      });
      minus.addEventListener("click", function (e) {
        if (counterValue.value > 0) {
          e.preventDefault();

          quontity--;
          counterValue.value = quontity;
          // getCost(item, quontity);
          // getTotalCost();
        }
      });

      const montageBtn = item.querySelector(".btn_montage");

      montageBtn.addEventListener("click", function (e) {
        e.preventDefault();
        montageBtn.classList.toggle("btn_montage_active");
      });

      toCartBtn.addEventListener("click", function (e) {
        e.preventDefault();
        toCartBtn.classList.add("card__btn_to-cart_hide");
        cartBtn.classList.add("card__btn_in-cart_visible");
      });
    });
  }
}

// -------------------------------------------- end Каталог ---------------------------------------------
// -------------------------------------------- start Описание товара: ---------------------------------------------

const goodsItem = document.querySelector(".goods-item__main");
if (goodsItem) {
  const montageBtn = goodsItem.querySelector(".btn_montage");

  montageBtn.addEventListener("click", function (e) {
    e.preventDefault();
    montageBtn.classList.toggle("btn_montage_active");
  });

  const botMenu = goodsItem.querySelectorAll(".bot-block__menu-item");
  const botText = goodsItem.querySelectorAll(".bot-block__text");
  botMenu.forEach((item) => {
    item.addEventListener("click", function (e) {
      const id = item.getAttribute("data-id");
      botMenu.forEach((item) => {
        item.classList.remove("bot-block__menu-item_active");
      });
      item.classList.add("bot-block__menu-item_active");

      botText.forEach((item) => {
        item.classList.remove("bot-block__text_active");
        if (item.getAttribute("data-id") === id) {
          item.classList.add("bot-block__text_active");
        }
      });
    });
  });

  const previews = document.querySelectorAll(".small-img-wrap__img");

  if (previews) {
    previews.forEach((item) => {
      item.addEventListener("click", function () {
        const imgBox = document
          .querySelector(".goods-item__img")
          .querySelector("img");
        const img = item.querySelector("img").getAttribute("src");
        imgBox.setAttribute("src", img);
      });
    });
  }

  // счетчик количества карточек в корзине:
  const plus = goodsItem.querySelector(".in-cart__counter-btn_plus");
  const minus = goodsItem.querySelector(".in-cart__counter-btn_minus");
  const counterValue = goodsItem.querySelector(".in-cart__counter-value");
  const totalCost = goodsItem.querySelector(".cost__cost-value");
  const priceEl = goodsItem.querySelector(".in-cart__price").innerHTML;
  let price = parseInt(priceEl.replace(/\s/g, ""));
  console.log(totalCost);

  let quontity = 0;
  counterValue.addEventListener("input", function (e) {
    if (Number(counterValue.value) <= 0) {
      quontity = 0;
      counterValue.value = 0;
    } else {
      quontity = counterValue.value;
    }
    totalCost.innerHTML = (quontity * price).toLocaleString();
  });

  plus.addEventListener("click", function (e) {
    quontity++;
    counterValue.value = quontity;
    console.log(quontity * price);
    totalCost.innerHTML = (quontity * price).toLocaleString();
  });

  minus.addEventListener("click", function (e) {
    if (counterValue.value > 0) {
      quontity--;
      counterValue.value = quontity;
      totalCost.innerHTML = (quontity * price).toLocaleString();
      console.log(quontity * price);
      totalCost.innerHTML = (quontity * price).toLocaleString();
    }
  });

  const colorBtn = goodsItem.querySelectorAll(".color-list__color-item");
  if (colorBtn) {
    colorBtn.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        colorBtn.forEach((item) => {
          item.classList.remove("color-list__color-item_active");
        });
        item.classList.add("color-list__color-item_active");
      });
    });
  }
}

// -------------------------------------------- end Описание товара ---------------------------------------------
// -------------------------------------------- start OWL: ---------------------------------------------
// let margin = 16;

jQuery(($) => {
  if ($(window).width() <= 768) {
    margin = 13;
  }
});
// console.log(window.screen.width / 340);

jQuery(($) => {
  if ($(window).width() > 0) {
    $(".owl-carousel-index").owlCarousel({
      loop: true,
      margin: 16,
      items: 3,
      nav: true,
      // navText : ["<i class='fa fa-chevron-left'>>>>></i>","<i class='fa fa-chevron-right'><<<<<<<</i>"],
      dots: false,
      singleItem: false,
      autoplay: false,
      smartSpeed: 1000,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          nav: false,
          items: window.screen.width / 360,
        },
        800: {
          nav: false,
          items: window.screen.width / 420,
        },
        1200: {
          // items: 4
        },
      },
    });

    $(".owl-carousel-about").owlCarousel({
      loop: false,
      margin: 20,
      items: 2,
      nav: false,
      // navText : ["<i class='fa fa-chevron-left'>>>>></i>","<i class='fa fa-chevron-right'><<<<<<<</i>"],
      dots: true,
      singleItem: false,
      autoplay: false,
      smartSpeed: 1000,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          nav: false,
          margin: 5,
          items: 1,
          // items: window.screen.width / 360,
        },
        400: {
          nav: false,
          margin: 5,
          items: 1.3,
          // items: window.screen.width / 360,
        },
      },
    });

    $(".owl-carousel_porf-item").owlCarousel({
      loop: false,
      margin: 16,
      // autoWidth:true,
      items: 4,
      nav: true,
      // navText : ["<i class='fa fa-chevron-left'>>>>></i>","<i class='fa fa-chevron-right'><<<<<<<</i>"],
      dots: false,
      singleItem: false,
      autoplay: false,
      smartSpeed: 1000,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          nav: false,
          // margin: 5,
          items: 4,
          margin: 13,
        },
        600: {
          nav: false,
          items: 4,
          margin: 15,
        },
        1050: {
          items: 4,
        },
      },
    });

    $(".owl-carousel-news-item").owlCarousel({
      loop: false,
      margin: 16,
      // autoWidth:true,
      items: 3,
      nav: true,
      // navText : ["<i class='fa fa-chevron-left'>>>>></i>","<i class='fa fa-chevron-right'><<<<<<<</i>"],
      dots: false,
      singleItem: false,
      autoplay: false,
      smartSpeed: 1000,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          nav: false,
          // margin: 5,
          items: 1,
          autoWidth: true,

          // margin: 13,
        },
        410: {
          nav: false,
          // margin: 5,
          items: 1.17,
          // margin: 13,
        },
        425: {
          nav: false,
          // margin: 5,
          items: 1.2,
          // margin: 13,
        },
        530: {
          nav: false,
          // margin: 5,
          items: 1.5,
          // margin: 13,
        },
        600: {
          nav: false,
          // margin: 5,
          items: 1.7,
          // margin: 13,
        },
        750: {
          nav: false,
          // margin: 5,
          items: 2.15,
          // margin: 13,
        },
        950: {
          nav: false,
          items: 2.4,
          // margin: 15,
        },
        1050: {
          nav: false,
          items: 2.7,
          // margin: 15,
        },
        1180: {
          items: 3,
        },
      },
    });

    // $(".owl-carousel-about-us").owlCarousel({
    //   // screenLeft:true,
    //   // startPosition: 1,
    //   loop: false,
    //   // center: true,
    //   margin: 20,
    //   items: 2,
    //   nav: true,
    //   // navText : ["<i class='fa fa-chevron-left'>>>>></i>","<i class='fa fa-chevron-right'><<<<<<<</i>"],
    //   dots: false,
    //   singleItem: false,
    //   autoplay: false,
    //   smartSpeed: 1000,
    //   // autowidth: true,
    //   autoplayTimeout: 5000,
    //   stagePadding: 104, // позволяет задать начальное положение первого слайда
    //   responsive: {
    //     0: {
    //       items: 1,
    //       stagePadding: 15,
    //       margin: 5,
    //       // nav: false,
    //       // items: window.screen.width / 360,
    //     },
    //     350: {
    //       items: 1,
    //       stagePadding: 15,
    //       margin: 5,
    //       // nav: false,
    //       // items: window.screen.width / 360,
    //     },
    //     570: {
    //       items: 1,
    //       stagePadding: 30,
    //       margin: 10,
    //       singleItem: true,
    //       // nav: false,
    //       // items: window.screen.width / 360,
    //     },
    //     760: {
    //       items: 2,
    //       stagePadding: 30,
    //       margin: 5,
    //       // nav: false,
    //       // items: window.screen.width / 360,
    //     },
    //     1280: {
    //       items: 2.5,
    //       stagePadding: 30,
    //       // nav: false,
    //       // items: window.screen.width / 420,
    //     },
    //     1460: {
    //       items: 3,
    //       stagePadding: 116,
    //     },
    //     1920: {
    //       items: 4,
    //     },
    //   },
    // });
  }
});

jQuery(($) => {
  if ($(window).width() < 1260) {
    $(".owl-carousel-about-us").owlCarousel({
      // screenLeft:true,
      // startPosition: 1,
      loop: false,
      // center: true,
      margin: 20,
      items: 2,
      nav: false,
      // navText : ["<i class='fa fa-chevron-left'>>>>></i>","<i class='fa fa-chevron-right'><<<<<<<</i>"],
      dots: true,
      singleItem: false,
      autoplay: false,
      smartSpeed: 1000,
      // autowidth: true,
      autoplayTimeout: 5000,
      stagePadding: 0, // позволяет задать начальное положение первого слайда
      responsive: {
        0: {
          // items: 1,
          // stagePadding: 15,
          // margin: 5,
          // nav: false,
          // items: window.screen.width / 360,
        },
        350: {
          // items: 1,
          // stagePadding: 15,
          // margin: 5,
          // nav: false,
          // items: window.screen.width / 360,
        },
        570: {
          // items: 1,
          // stagePadding: 30,
          // margin: 10,
          // singleItem: true,
          // nav: false,
          // items: window.screen.width / 360,
        },
        760: {
          // items: 2,
          // stagePadding: 30,
          // margin: 5,
          // nav: false,
          // items: window.screen.width / 360,
        },
        1280: {
          // items: 2.5,
          // stagePadding: 30,
          // nav: false,
          // items: window.screen.width / 420,
        },
        1460: {
          // items: 3,
          // stagePadding: 116,
        },
        1920: {
          // items: 4,
        },
      },
    });
  }
});

// -------------------------------------------- end OWL ---------------------------------------------

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

// -------------------------------------------- start товар: ---------------------------------------------
const goodsCartBtn = document.querySelectorAll(".goods-item__btn_to-cart");

if (goodsCartBtn) {
  // const goodsQuantity = document.querySelector(".goods__quantity");
  goodsCartBtn.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      item.classList.toggle("goods-item__btn_to-cart_active");
      // headerCartBtn.classList.toggle("btn__cart_active");
      setCartActive();
    });
  });
}

// -------------------------------------------- end товар ---------------------------------------------
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
// -------------------------------------------- start Отзывы: ---------------------------------------------

// -------------------------------------------- end Отзывы ---------------------------------------------
// -------------------------------------------- start старье: ---------------------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   const burgerButton = document.getElementById("burger-burgerenook");
//   const header = document.querySelector(".header-burgerenook");
//   const body = document.body;

//   burgerButton.addEventListener("click", function () {
//     header.classList.toggle("open-burgerenook");
//     if (header.classList.contains("open-burgerenook")) {
//       body.classList.add("no-scroll");
//     } else {
//       body.classList.remove("no-scroll");
//     }
//   });

//   const dropdownButton = document.querySelector(
//     ".dropdown .menu__item-burgerenook"
//   );
//   const dropdownLinks = document.querySelectorAll(".dropdown-link");
//   const dropdownTitle = document.getElementById("dropdown-title-burgerenook");
//   const dropdownContent = document.getElementById(
//     "dropdown-content-burgerenook"
//   );
//   const noActiveStrel = document.querySelector(".no-active-strel");
//   const activeStrel = document.querySelector(".active-strel");

//   dropdownButton.addEventListener("click", function (event) {
//     event.preventDefault();
//     this.parentElement.classList.toggle("show");
//     if (this.parentElement.classList.contains("show")) {
//       noActiveStrel.style.display = "none";
//       activeStrel.style.display = "inline";
//     } else {
//       noActiveStrel.style.display = "inline";
//       activeStrel.style.display = "none";
//     }
//   });

//   dropdownLinks.forEach((link) => {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();
//       const selectedCity = this.getAttribute("data-city");
//       const currentCity = dropdownTitle.textContent;

//       dropdownTitle.textContent = selectedCity;
//       this.setAttribute("data-city", currentCity);
//       this.textContent = currentCity;

//       dropdownButton.parentElement.classList.remove("show");
//       noActiveStrel.style.display = "inline";
//       activeStrel.style.display = "none";
//     });
//   });

//   document.addEventListener("click", function (event) {
//     const isClickInsideDropdown = dropdownButton.contains(event.target);
//     if (!isClickInsideDropdown) {
//       const dropdowns = document.querySelectorAll(".dropdown");
//       dropdowns.forEach((dropdown) => dropdown.classList.remove("show"));
//       noActiveStrel.style.display = "inline";
//       activeStrel.style.display = "none";
//     }
//   });
// });

//-----------------------------

const initSlider = () => {
  const sliderScrollbar = document.querySelector(
    ".container .slider-scrollbar"
  );
  if (!sliderScrollbar) {
    return;
  }
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(
    ".slider-wrapper .slide-button"
  );
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    const maxThumbPosition =
      sliderScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

      const boundedPosition = Math.max(
        0,
        Math.min(maxThumbPosition, newThumbPosition)
      );
      const scrollPosition =
        (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButtons = () => {
    slideButtons[0].style.display =
      imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display =
      imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  };

  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    handleSlideButtons();
  });
};

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

//------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card_s-uslygami");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      window.location.href = "usluga.php";
    });
  });
});

//------------------------------

// Получаем текущий URL
const currentPage = window.location.pathname.split("/").pop();

// Находим все ссылки в меню, включая ссылки с классом .ul_header1 и .ul_header
const navLinkss = document.querySelectorAll(
  ".nav_header .ul_header1 a, .nav_header .ul_header a"
);

// Проходим по каждой ссылке
navLinkss.forEach((link) => {
  // Проверяем, если href ссылки совпадает с текущей страницей
  if (link.getAttribute("href").includes(currentPage)) {
    // Добавляем класс 'active' к ссылке
    link.classList.add("active");
  }
});

//------------------------------

document.querySelectorAll(".select_uslugi").forEach((el) => {
  el.addEventListener("click", function (e) {
    if (!e.target.classList.contains("option_uslugi")) {
      this.classList.toggle("collapsed_uslugi");

      const shownUslugi = this.querySelector(".shown_uslugi");
      shownUslugi.classList.toggle(
        "red-text",
        !shownUslugi.classList.contains("red-text")
      );
    }
  });

  el.querySelectorAll(".option_uslugi").forEach((option) => {
    option.addEventListener("click", function (e) {
      e.stopPropagation();

      el.querySelector(".shown_uslugi").innerHTML = this.innerHTML;

      el.classList.add("collapsed_uslugi");

      document.querySelectorAll(".shown_uslugi").forEach((shown) => {
        shown.classList.remove("red-text");
      });
    });
  });
});

//------------------------------

$(".btn_on-modal-zakaz1").click(function () {
  var name = $("#form_footer-name1").val();
  var phone = $("#form_footer-phone1").val();
  var sita = $("#form_footer-situation1").val();
  $.ajax({
    url: "zakazZvonM.php",
    type: "POST",
    cache: false,
    data: {
      "form_footer-name1": name,
      "form_footer-phone1": phone,
      "form_footer-situation1": sita,
    },
    dataType: "html",
    success: function (data) {
      if (data == "Готово") {
        $(".wrap-zvonok").hide();
        $("#phone-errors").hide();
        $("#form_footer-phone1").val("");
        $("#form_footer-name1").val("");
        $("#form_footer-situation1").val("");
        $("#form_footer-phone1").removeClass(".error");
        $(".css-modal-target").show(); // Показываем модальное окно
        $("html").addClass("no-scroll");
      }
    },
  });
});

//------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("form_footer-phone1");

  if (!phoneInput) {
    return;
  }
  const submitButton = document.getElementById("submit_button1");

  function formatPhoneNumber(value) {
    if (!value.startsWith("+7")) {
      value = "+7 " + value;
    }

    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    }

    return cleaned.replace(
      /^(\d{1})?(\d{0,3})?(\d{0,3})?(\d{0,2})?(\d{0,2})?$/,
      function (_, g1, g2, g3, g4, g5) {
        return `+${g1 || ""}${g2 ? " (" + g2 : ""}${g3 ? ") " + g3 : ""}${
          g4 ? "-" + g4 : ""
        }${g5 ? "-" + g5 : ""}`; // представляет собой шаблон для номера телефона в формате +7 (XXX) XXX-XX-XX.
      }
    );
  }

  phoneInput.addEventListener("input", function () {
    phoneInput.value = formatPhoneNumber(phoneInput.value);

    const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (phonePattern.test(phoneInput.value)) {
      submitButton.classList.add("active");
      submitButton.disabled = false;
      phoneInput.classList.remove("input-error");
    } else {
      submitButton.classList.remove("active");
      submitButton.disabled = true;
    }
  });
});

//------------------------------

$(".btn_zayvka-otprav").click(function () {
  var name = $("#form_footer-name").val();
  var phone = $("#form_footer-phone").val();
  var sita = $("#form_footer-situation").val();
  $.ajax({
    url: "otprZayvkaM.php",
    type: "POST",
    cache: false,
    data: {
      "form_footer-name": name,
      "form_footer-phone": phone,
      "form_footer-situation": sita,
    },
    dataType: "html",
    success: function (data) {
      if (data == "Готово") {
        $("#phone-errors").hide();
        $("#form_footer-phone").val("");
        $("#form_footer-name").val("");
        $("#form_footer-situation").val("");
        $("#form_footer-phone").removeClass(".error");
        $(".css-modal-target").show(); // Показываем модальное окно
        $("html").addClass("no-scroll");
      }
    },
  });
});

//------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   const phoneInput = document.getElementById("form_footer-phone");
//   const submitButton = document.getElementById("submit_button");

//   function formatPhoneNumber(value) {
//     if (!value.startsWith("+7")) {
//       value = "+7 " + value;
//     }

//     const cleaned = value.replace(/\D/g, "");
//     const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

//     if (match) {
//       return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
//     }

//     return cleaned.replace(
//       /^(\d{1})?(\d{0,3})?(\d{0,3})?(\d{0,2})?(\d{0,2})?$/,
//       function (_, g1, g2, g3, g4, g5) {
//         return `+${g1 || ""}${g2 ? " (" + g2 : ""}${g3 ? ") " + g3 : ""}${
//           g4 ? "-" + g4 : ""
//         }${g5 ? "-" + g5 : ""}`; // представляет собой шаблон для номера телефона в формате +7 (XXX) XXX-XX-XX.
//       }
//     );
//   }

//   phoneInput.addEventListener("input", function () {
//     phoneInput.value = formatPhoneNumber(phoneInput.value);

//     const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
//     if (phonePattern.test(phoneInput.value)) {
//       submitButton.classList.add("active");
//       submitButton.disabled = false;
//       phoneInput.classList.remove("input-error");
//     } else {
//       submitButton.classList.remove("active");
//       submitButton.disabled = true;
//     }
//   });
// });

// -------------------------------------------- end старье ---------------------------------------------
