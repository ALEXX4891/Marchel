<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Услуги</title>
  <link rel="stylesheet" href="uslugi.css" />
  <link rel="stylesheet" href="index.css" />
  <link rel="stylesheet" href="reset.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
  <link rel="icon" href="/img-icons/favicon.png" type="image/x-icon" />
  <link rel="apple-touch-icon" href="/img-icons/favicon.png">
</head>

<body>
  <?php include 'header.php'; ?>
  <section>
    <div class="container">
      <div class="h1_text-chem-pomoch">Чем мы можем вам помочь</div>
      <div class="left_and-riiiiight">
        <div class="left_sidebar">
          <form method="GET" action="infobd.php" id="searchForm" class="form_poisk">
            <input type="text" class="textUsl" id="search" name="search" placeholder="Найти услугу">
            <button type="submit" class="lupa-btn" id="searchButton" disabled>
              <img class="cha-podvinu" src="/img-icons/lupa.png" alt="">
            </button>
            <div id="suggestions"></div>
            <div id="clearSearch" style="display: none;"><img src="/img-icons/Vector.png" alt=""></div> <!-- Крестик для очистки поля -->
          </form>
          <div class="vseVme">
            <div id="container_uslugi">
              <div class="select_uslugi collapsed_uslugi">
                <div class="shown_uslugi">
                  <p class="text-uslugi887">Срочный ремонт</p>
                </div>
                <div class="option_uslugi"><a class="text-uslugi887" class="mt10" href="/usluga.php">Автоэлектрик с выездом</a></div>
                <div class="option_uslugi"><a class="text-uslugi887" href="/usluga.php">Грузовой автоэлектрик с выездом</a></div>
              </div>
              <div class="select_uslugi collapsed_uslugi">
                <div class="shown_uslugi">
                  <p class="text-uslugi887">Ремонт и замена колёс</p>
                </div>
                <div class="option_uslugi"><a class="text-uslugi887" class="mt10" href="/usluga.php">Шиномонтажник</a></div>
                <div class="option_uslugi"><a class="text-uslugi887" href="/usluga.php">Автоэлектрик с выездом</a></div>
              </div>
              <div class="select_uslugi collapsed_uslugi">
                <div class="shown_uslugi">
                  <p class="text-uslugi887">Налаживание электросистемы</p>
                </div>
                <div class="option_uslugi"><a class="text-uslugi887" class="mt10" href="/usluga.php">Сварщик</a></div>
              </div>
              <div class="select_uslugi collapsed_uslugi">
                <div class="shown_uslugi">
                  <p class="text-uslugi887">Услуги с выездом</p>
                </div>
                <div class="option_uslugi"><a class="text-uslugi887" class="mt10" href="/usluga.php">Грузовой автоэлектрик с выездом</a></div>
                <div class="option_uslugi"><a class="text-uslugi887" href="/usluga.php">Автоэлектрик с выездом</a></div>
                <div class="option_uslugi"><a class="text-uslugi887" href="/usluga.php">Шиномонтажник</a></div>
              </div>
              <div class="select_uslugi collapsed_uslugi">
                <div class="shown_uslugi">
                  <p class="text-uslugi887">Доставка</p>
                </div>
                <div class="option_uslugi"><a class="text-uslugi887" class="mt10" href="/usluga.php">Чипсов</a></div>
                <div class="option_uslugi"><a class="text-uslugi887" href="/usluga.php">Coca Cola</a></div>
                <div class="option_uslugi"><a class="text-uslugi887" href="/usluga.php">Энергетик</a></div>
              </div>
              <div class="select_uslugi collapsed_uslugi">
                <div class="shown_uslugi">
                  <p class="text-uslugi887">Трезвый водитель</p>
                </div>
                <div class="option_uslugi"><a class="text-uslugi887" class="mt10" href="/usluga.php">Валера на приоре</a></div>
                <div class="option_uslugi"><a class="text-uslugi887" href="/usluga.php">Степан на двинашке</a></div>
                <div class="option_uslugi"><a class="text-uslugi887" href="/usluga.php">Серёга на урале</a></div>
              </div>
              <div class="select_uslugi collapsed_uslugi">
                <div class="shown_uslugi">
                  <p class="text-uslugi887">Диагностика</p>
                </div>
                <div class="option_uslugi"><a class="text-uslugi887" class="mt10" href="/usluga.php">Машины</a></div>
                <div class="option_uslugi"><a class="text-uslugi887" href="/usluga.php">Мотоцикла</a></div>
                <div class="option_uslugi"><a class="text-uslugi887" href="/usluga.php">Квадрокоптера</a></div>
              </div>
            </div>
            <div id="searchResults"></div>
            <div id="searchResults1"></div>
          </div>
        </div>
        <?php
        require_once "SearchF.php";
        ?>
      </div>


    </div>
  </section>
  <div class="probal"></div>
  <?php include 'footer.php'; ?>

  <script src="uslugi.js"></script>
</body>

</html>