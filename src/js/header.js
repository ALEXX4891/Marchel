// Получаем текущий URL
const currentPage = window.location.pathname.split('/').pop();

// Находим все ссылки в меню, включая ссылки с классом .ul_header1 и .ul_header
const navLinks = document.querySelectorAll('.nav_header .ul_header1 a, .nav_header .ul_header a');

// Проходим по каждой ссылке
navLinks.forEach(link => {
    // Проверяем, если href ссылки совпадает с текущей страницей
    if (link.getAttribute('href').includes(currentPage)) {
        // Добавляем класс 'active' к ссылке
        link.classList.add('active');
    }
});
