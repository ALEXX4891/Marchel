<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="/ModalZakazZvonka.css" />
<link rel="stylesheet" href="/reset.css" />
    <link rel="stylesheet" href="reset.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/modalSpasibo.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <link rel="icon" href="/img-icons/favicon.png" type="image/x-icon" />
  <link rel="apple-touch-icon" href="/img-icons/favicon.png">
</body>
</html>


<section>
<div class="no-scroll">
  <div class="wrap-zvonok" id="modal-zvonok">
    <div class="window-zvonok">
      <a href="#close-zvonok" class="close-zvonok"><img src="/img-icons/kresst.svg" alt=""></a>
      <p class="zayvla-otpravlena-zvonok">Отправьте заявку</p>
      <p class="text-zayvla-otpravlena-zvonok">Опишите проблему и мы свяжемся с вами в ближайшее время</p>
      <div class="from-form">
        <input class="input-field" type="text" id="form_footer-name" name="name" placeholder="Имя" minlength="2" title="Используйте только буквы" pattern="[А-Яа-яЁё ]+" required>
        <input class="input-field" type="text" id="form_footer-phone" name="phone" placeholder="Телефон" inputmode="numeric" title="Используйте только цифры" pattern="\+7\d{10}" required value="+7">
        <input class="input-field-sit" type="text" id="form_footer-situation" name="situation" placeholder="Опишите ситуацию, например: “Спустило колесо”" minlength="2" title="Используйте только буквы" pattern="[А-Яа-яЁё ]+" required>
        <div>
          <button class="btn_on-modal-zakaz" id="submit_button"><a class="text_on-modal-zakaz">Отправить</a></button>
        </div>
        <p class="soglasno-zakazy">Нажимая на кнопку Вы соглашаетесь с нашей политикой обработки персональных данных</p>
      </div>
    </div>
  </div>
  </div>
</section>





<?php 
require 'zakazZvon.php';
?>
<?php 
require 'modalokno.php';
?>
