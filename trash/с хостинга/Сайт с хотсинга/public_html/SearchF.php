<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(document).ready(function() {
        // Функция для загрузки всех услуг при загрузке страницы
        function loadAllServices() {
            $.ajax({
                url: 'infobd.php',
                method: 'GET',
                success: function(data) {
                    $('#searchResults').html(data);
                }
            });
        }

        // Загрузка услуг при первоначальной загрузке страницы
        loadAllServices();

        // Функция для проверки ввода в поле поиска
        function checkSearchInput() {
            var searchQuery = $('#search').val();
            var searchButton = $('#searchButton');
            if (searchQuery.length > 0) {
                searchButton.removeAttr('disabled');
                $('body').css('overflow', 'hidden');  // Блокировка прокрутки страницы
                $.ajax({
            url: 'Search.php',
            method: 'GET',
            data: { search: searchQuery },
            success: function(data) {
                if (data.trim() !== "") {
                    $('#suggestions').html(data); // Отображение подсказок поиска
                } else {
                    $('#suggestions').html(''); // Очистка подсказок, если нет результатов
                    if (window.matchMedia("(max-width: 768px)").matches) {
                        $('#searchResults1').html('По вашему запросу ничего не найдено'); // Вывод текста для мобильной версии
                        $('#searchResults1').show();
                    }
                }
            }
        });
    } else {
                searchButton.attr('disabled', 'disabled');
                $('#searchResults1').hide();
                $('#suggestions').html(''); // Очистка подсказок, если поле поиска пустое
                $('body').css('overflow', 'auto');  // Разрешение прокрутки страницы
            }

            // Загрузка результатов поиска в основной блок
            $.ajax({
                url: 'infobd.php',
                method: 'GET',
                data: { search: searchQuery },
                success: function(data) {
                    $('#searchResults').html(data);
                }
            });
        }

        // Обработчик события ввода в поле поиска
        $('#search').on('input', function() { 
            checkSearchInput();
            var searchQuery = $(this).val();
            if (searchQuery.length > 0) {
                $('#clearSearch').show();
                $('body').css('overflow', 'hidden');  // Блокировка прокрутки страницы
            } else {
                $('#clearSearch').hide();
                $('body').css('overflow', 'auto');  // Разрешение прокрутки страницы
            }
        });

        // Обработчик события фокуса на поле поиска
        $('#search').on('focus', function() {
            $('#searchButton').hide(); // Скрытие кнопки поиска
            $('#clearSearch').show();  // Показ кнопки очистки поиска
            if (window.matchMedia("(max-width: 768px)").matches) {
                $('#searchButton').hide(); // Скрытие кнопки поиска на мобильных устройствах
                $('#container_uslugi').hide(); // Скрытие контейнера с услугами на мобильных устройствах
                $('#clearSearch').show(); // Показ кнопки очистки поиска на мобильных устройствах
            }
        });

        // Обработчик события потери фокуса полем поиска
        $('#search').on('blur', function() {
            if ($(this).val().length === 0) {
                $('#searchButton').show(); // Показ кнопки поиска, если поле пустое
                $('#clearSearch').hide(); // Скрытие кнопки очистки поиска, если поле пустое
            }
            if ($(this).val().length === 0 && window.matchMedia("(max-width: 768px)").matches) {
                $('#searchButton').show(); // Показ кнопки поиска, если поле пустое на мобильных устройствах
                $('#clearSearch').hide(); // Скрытие кнопки очистки поиска, если поле пустое на мобильных устройствах
                $('#container_uslugi').show(); // Показ контейнера с услугами на мобильных устройствах
            }
            // Восстанавливаем прокрутку после потери фокуса
            $('body').css('overflow', 'auto');
        });

        // Обработчик отправки формы поиска
        $('#searchForm').submit(function(event) {
            event.preventDefault(); // Предотвращаем стандартное поведение формы
            var searchQuery = $('#search').val();

            // Если поле поиска не пустое, делаем AJAX запрос для обновления результатов поиска
            if (searchQuery.length > 0) {
                $.ajax({
                    url: 'infobd.php',
                    method: 'GET',
                    data: { search: searchQuery },
                    success: function(data) {
                        $('#searchResults').html(data); // Обновляем результаты поиска
                        $('#suggestions').html(''); // Очищаем подсказки
                        $('body').css('overflow', 'auto'); // Разрешаем прокрутку
                    }
                });
            } else {
                $('#searchResults').html(''); // Очищаем результаты поиска, если поле пустое
            }
        });

        // Обработчик клика по кнопке очистки поиска
        $('#clearSearch').click(function() {
            $('#search').val(''); // Очищаем поле поиска
            $('#suggestions').html(''); // Очищаем подсказки
            $(this).hide(); // Скрываем кнопку очистки поиска
            $('#searchButton').show(); // Показываем кнопку поиска
            $('body').css('overflow', 'auto'); // Разрешаем прокрутку
            checkSearchInput(); // Вызываем функцию проверки ввода
            loadAllServices(); // Загружаем все услуги

            // Дополнительно, если необходимо, показываем элементы на мобильных устройствах
            if (window.matchMedia("(max-width: 768px)").matches) {
                $('#container_uslugi').show(); // Показываем контейнер с услугами
            }
        });

        $(document).on('click', '.suggestion-item', function() {
    var serviceId = $(this).data('id');
    if (window.matchMedia("(max-width: 768px)").matches) {
        if (serviceId == 1) {
            window.location.href = 'usluga.php?id=' + serviceId; // Перенаправление на страницу услуги 1
        } else if (serviceId == 2) {
            window.location.href = 'index.php?id=' + serviceId; // Перенаправление на главную страницу для услуги 2
        } else if (serviceId == 3) {
            window.location.href = 'contacts.php?id=' + serviceId; // Перенаправление на страницу контактов для услуги 3
        } else if (serviceId == 4) {
            window.location.href = 'Onas.php?id=' + serviceId; // Перенаправление на страницу "О нас" для услуги 4
        }
    } else {
        // Обработка для десктопных устройств, если необходимо
        var text = $(this).text();
        $('#search').val(text); // Заполняем поле поиска текстом из подсказки
        $('#suggestions').html(''); // Очищаем подсказки
        $('body').css('overflow', 'auto'); // Разрешаем прокрутку
        $('#searchForm').submit(); // Отправляем форму поиска
    }
});

        // Инициализация проверки ввода при загрузке страницы
        checkSearchInput();
    });
</script>
