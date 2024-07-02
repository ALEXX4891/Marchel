<link rel="stylesheet" href="/index.css" />
<link rel="stylesheet" href="/reset.css" />
<link rel="stylesheet" href="/ModalZakazZvonka.css" />
<link rel="stylesheet" href="/style887.css">
<style>
  .btn_on-modal-zakaz1 {
    width: 345px;
    height: 48px;
    background: rgb(119, 126, 133);
    margin-bottom: 10px;
    margin-right: 40px;
    color: rgb(255, 255, 255);
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 48px;
    /* Выравнивание по вертикали */
    letter-spacing: 0%;
    text-align: center;
    /* Центрирование текста */
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    padding: 10px 12px 10px 12px;
  }

  .btn_on-modal-zakaz1 a {
    color: white;
    text-decoration: none;
  }

  .btn_on-modal-zakaz1.active {
    background: rgb(202, 32, 32);
  }

  .btn_on-modal-zakaz1:disabled {
    pointer-events: none;
    /* Отключить все события мыши */
  }
</style>

<header class="header_color-bg">
  <div class="container">
    <div class="header_top">
      <nav class="nav_header">
        <div class="logo_alfa">
          <a href="index.php">
            <img  src="/img-icons/logo.svg" alt="LOGO" />
          </a>
          <div class="left-ne-pravo">
            <div class="elf">
              <a href="index.php">
                <img src="/img-icons/logo.svg" alt="LOGO" />
              </a>
            </div>
            <div class="elf-right">
              <ul class="ul_header">
                <li class="li_header"><a href="/Onas.php">О нас</a></li>
                <li class="li_header"><a href="/uslugi.php">Услуги</a></li>
                <li class="li_header"><a href="/news.php">Новости</a></li>
                <li class="li_header"><a href="/contacts.php">Контакты</a></li>
              </ul>
              <header class="header-burgerenook">
                <div class="container-burgerenook header__container-burgerenook">
                  <button class="header__burger-btn-burgerenook" id="burger-burgerenook">
                    <span></span><span></span><span class="span-burger"></span>
                  </button>
                  <nav class="menu-burgerenook">
                    <ul class="menu__list-burgerenook">
                      <li class="menu__item-burgerenook1">
                        <button class="menu__item-burgerenook"><a href="/Onas.php" class="menu__link-burgerenook">О нас</a></button>
                      </li>
                      <li class="menu__item-burgerenook1">
                        <button class="menu__item-burgerenook"><a href="/uslugi.php" class="menu__link-burgerenook">Услуги</a></button>
                      </li>
                      <li class="menu__item-burgerenook1">
                        <button class="menu__item-burgerenook"><a href="/news.php" class="menu__link-burgerenook">Новости</a></button>
                      </li>
                      <li class="menu__item-burgerenook1">
                        <button class="menu__item-burgerenook"><a href="/contacts.php" class="menu__link-burgerenook">Контакты</a></button>
                      </li>
                      <li class="menu__item-burgerenook1 dropdown">
                        <button class="menu__item-burgerenook" id="dropdown-btn-burgerenook">
                          <div class="flex-jostkyi">
                            <a href="#" id="dropdown-title-burgerenook" class="menu__link-burgerenook">Тюмень</a>
                            <img src="/img-icons/no-active-strel.png" alt="no-active-strel" class="no-active-strel">
                            <img src="/img-icons/active-strel.png" alt="active-strel" class="active-strel" style="display: none;">
                          </div>
                        </button>
                        <ul class="dropdown-content" id="dropdown-content-burgerenook">
                          <li><a href="#" class="dropdown-link" data-city="Курган">Курган</a></li>
                          <li><a href="#" class="dropdown-link" data-city="Омск">Омск</a></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </header>
              <script defer src="/testBurger.js"></script>
              
              
            </div>
          </div>
        </div>
        <ul class="ul_header1">
          <li class="li_header"><a href="/Onas.php">О нас</a></li>
          <li class="li_header"><a href="/uslugi.php">Услуги</a></li>
          <li class="li_header"><a href="/news.php">Новости</a></li>
          <li class="li_header"><a href="/contacts.php">Контакты</a></li>
        </ul>
    <ul class="three_icons000">
        <li>
            <a href="https://t.me/+79994589482" target="_blank">
                <img src="/img-icons/telegram.svg" alt="Telegram" />
            </a>
        </li>
        <li>
            <a href="whatsapp://send?phone=+7 999 458 94 82" target="_blank">
                <img src="/img-icons/WhatsApp.svg" alt="" />
            </a>
        </li>
        <li>
            <a href="viber://chat?number=%2B79994589482" target="_blank">
                <img src="/img-icons/viber-footer.svg" alt="Viber" />
            </a>
        </li>
    </ul>
    <div class="number_and-zakaz-zvon">
        <p class="number_telefona-adaptyiv">
            <a href="tel:+7 999 458 94 82">+7 999 458 94 82</a>
        </p>
        <div class="css-modal-checkbox-container-activationnnnn12345">
            <label for="css-modal-checkbox" class="css-modal-checkbox"><a class="style_knopza-zvonilka text_modal-zakazanky" href="#modal-zvonok">Заказать звонок</a></label>
        </div>
        <div class="wrap-zvonok" id="modal-zvonok">
            <div class="window-zvonok">
                <a href="#close-zvonok" class="close-zvonok"><img src="/img-icons/kresst.svg" alt=""></a>
                <p class="zayvla-otpravlena-zvonok">Отправьте заявку</p>
                <p class="text-zayvla-otpravlena-zvonok">Опишите проблему и мы свяжемся с вами в ближайшее время</p>
                <div class="from-form">
                    <input class="input-field" type="text" id="form_footer-name1" name="name" placeholder="Имя" minlength="2" title="Используйте только буквы" pattern="[А-Яа-яЁё ]+" required>
                    <input class="input-field" type="text" id="form_footer-phone1" name="phone" placeholder="Телефон" inputmode="numeric" title="Используйте только цифры" required value="+7 " required maxlength="18">
                    <input class="input-field-sit" type="text" id="form_footer-situation1" name="situation" placeholder="Опишите ситуацию, например: “Спустило колесо”" minlength="2" title="Используйте только буквы" pattern="[А-Яа-яЁё ]+" required>
                    <div>
                        <button id="submit_button1" class="btn_on-modal-zakaz1" disabled><a class="text_on-modal-zakaz">Отправить</a></button>
                    </div>
                    <p class="soglasno-zakazy">Нажимая на кнопку Вы соглашаетесь с нашей политикой обработки персональных данных</p>
                </div>
            </div>
        </div>
    </div>
    </nav>
    
      
    </div>
    <p class="number_telefona">
            <a href="tel:+7 999 458 94 82">+7 999 458 94 82</a>
        </p>
  </div>
</header>
<?php
require 'zakazZvon.php';
?>
<?php
require 'modalokno.php';
?>
<?php
require 'FormPhone.php';
?>
<script src="/UnProkrutka.js"></script>
<script src="/header.js"></script>
