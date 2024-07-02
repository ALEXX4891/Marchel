<link rel="stylesheet" href="/index.css" />
<link rel="stylesheet" href="/reset.css" />

<section class="form_under-footer">
  <div class="container">
    <div class="form_border">
      <div class="text_srochno-zayvka">
        Отправьте срочную заявку
      </div>
      <div class="napishi_nam">
        Напишите нам и наши специалисты свяжутся с вами
      </div>
      <form id="urgentRequestForm">
        <div class="flex_nax">
          <div class="">
            <input class="input-field" type="text" id="form_footer-name" name="name" placeholder="Имя" minlength="2" title="Используйте только буквы" pattern="[А-Яа-яЁё ]+" required>
          </div>
          <div class="">
            <input class="input-field" type="text" id="form_footer-phone" name="phone" placeholder="99999999" inputmode="numeric" title="Используйте только цифры" pattern="\+7\d{10}" required value="+7" required maxlength="18">
          </div>
        </div>
        <div class="form_footer-situation">
          <input class="" type="text" id="form_footer-situation" name="situation" placeholder="Опишите ситуацию, например: “Спустило колесо”" minlength="2" title="Используйте только буквы" pattern="[А-Яа-яЁё ]+" required>
        </div>
        <div class="left_and-right-situtka">
          <div class="left_situtka">
            <button class="btn_zayvka-otprav" id="submit_button" type="button" disabled>
              <span class="text_zayvka-otprav">Отправить</span>
            </button>
            <div class="text_soglasihka">Нажимая на кнопку Вы соглашаетесь с нашей политикой обработки<p></p> персональных данных</div>
          </div>
          <div class="right_situtka">
            <div class="iso_flexas">
              <div class="text_geodannie_soc">Или отправьте свои геоданные через один из мессенджеров</div>
              <div class="three_icons-soc">
                <div class="soc">
                  <a href="https://t.me/+79994589482" target="_blank">
                    <img src="/img-icons/tg-form.svg" alt="Telegram" />
                  </a>
                </div>
                <div class="soc">
                  <a href="whatsapp://send?phone=+7 999 458 94 82" target="_blank">
                    <img src="/img-icons/wa-form.svg" alt="" />
                  </a>
                </div>
                <div class="soc">
                  <a href="viber://chat?number=%2B79994589482" target="_blank">
                    <img src="/img-icons/viber-form.svg" alt="Viber" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

<?php
require 'otprZayvka.php';
?>
<?php
require 'modalokno.php';
?>
<?php
require 'modalUPS.php';
?>
<?php
require 'FormPhoneIndex.php';
?>
