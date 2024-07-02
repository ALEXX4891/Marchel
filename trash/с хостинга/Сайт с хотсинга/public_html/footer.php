<link rel="stylesheet" href="/index.css" />
<link rel="stylesheet" href="/reset.css" />
<link rel="stylesheet" href="/ModalZakazZvonka.css" />

<footer class="footer">
  <div class="container">
    <div class="footer_bottom">
      <div class="left_logo">
        <div class="logo_footer">
          <a href="Index.php"><img src="/img-icons/logo_footer.png" alt="" /></a>
        </div>
        <div class="css-modal-checkbox-container-invise">
          <label for="css-modal-checkbox" class="css-modal-checkbox ">
            <button class="btn_modal-kakal-footer"><a class="style_knopza-zvonilka text_modal-kakal-footer" href="#modal-zvonok">Вызвать помощь</a></button></label>
        </div>
        <div class="wrap-zvonok" id="modal-zvonok">
          <div class="window-zvonok">
            <a href="#close-zvonok" class="close-zvonok"><img src="/img-icons/kresst.svg" alt=""></a>
            <p class="zayvla-otpravlena-zvonok">Отправьте заявку</p>
            <p class="text-zayvla-otpravlena-zvonok">Опишите проблему и мы свяжемся с вами в ближайшее время</p>
            <div class="from-form">
              <input class="input-field" type="text" id="form_footer-name2" name="name" placeholder="Имя" minlength="2" title="Используйте только буквы" pattern="[А-Яа-яЁё ]+" required>
              <input class="input-field" type="text" id="form_footer-phone2" name="phone" placeholder="Телефон" inputmode="numeric" title="Используйте только цифры" pattern="\+7\d{10}" required value="+7">
              <input class="input-field-sit" type="text" id="form_footer-situation2" name="situation" placeholder="Опишите ситуацию, например: “Спустило колесо”" minlength="2" title="Используйте только буквы" pattern="[А-Яа-яЁё ]+" required>
              <div>
                <button class="btn_on-modal-zakaz2"><a class="text_on-modal-zakaz">Отправить</a></button>
              </div>
              <p class="soglasno-zakazy">Нажимая на кнопку Вы соглашаетесь с нашей политикой обработки персональных данных</p>
            </div>
          </div>
        </div>
        <div class="text_vse_prava">
          © «Выездной сервис Альфа», 2018
          <p></p>
          Все права защищены
        </div>
      </div>
      <div class="nav_vertical">
        <ul class="ul_footer">
          <li class="li_footer"><a href="/Onas.php">О нас</a></li>
          <li class="li_footer"><a href="/uslugi.php">Услуги</a></li>
          <li class="li_footer"><a href="/news.php">Новости</a></li>
          <li class="li_footer"><a href="/contacts.php">Контакты</a></li>
        </ul>
      </div>
      <div class="number_and-pochtka">
        <p class="number_telefona-footer">
          <a href="tel:+7 999 458 94 82">+7 999 458 94 82</a>
        </p>
        <div class="poshta_direktor">
          <a href="mailto:direktor-info.alfa@yandex.ru">direktor-info.alfa@yandex.ru</a>
        </div>
        <div class="three_icons-footer">
          <div>
            <a href="https://t.me/+79994589482" target="_blank">
              <img src="/img-icons/telegram-footer.svg" alt="Telegram" />
            </a>
          </div>
          <div>
            <a href="whatsapp://send?phone=+7 999 458 94 82" target="_blank"><img src="/img-icons/wa-footer.svg" alt="" /></a>
          </div>
          <div>
            <a href="viber://chat?number=%2B79994589482" target="_blank">
              <img src="/img-icons/viber-footer.svg" alt="Viber" />
            </a>
          </div>
        </div>
      </div>
      <div class="btn-and-polit">
        <div class="css-modal-checkbox-container css-modal-checkbox-container-activationnnnn">
          <label for="css-modal-checkbox" class="css-modal-checkbox ">
            <a class="style_knopza-zvonilka text_modal-kakal-footer" href="#modal-zvonok">
              <button class="btn_modal-kakal-footer">
                <p class="style_knopza-zvonilka text_modal-kakal-footer">Вызвать помощь</p>
              </button></a></label>
        </div>
        <div class="text_polit">Политика конфиденциальности</div>
      </div>
    </div>
  </div>
</footer>
