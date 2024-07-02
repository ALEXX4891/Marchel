<?php
$name = trim(filter_var($_POST['form_footer-name'], FILTER_SANITIZE_STRING));
$phone = trim(filter_var($_POST['form_footer-phone'], FILTER_SANITIZE_STRING));
$sita = trim(filter_var($_POST['form_footer-situation'], FILTER_SANITIZE_STRING));

$error = '';
if (strlen($phone) <= 17)
    $error = 'для проверки';
    else if(strlen($phone) >= 19)
    $error = 'для проверки';

if ($error != '') {
    echo $error;
    exit();
}

$my_email = "212121311111@mail.ru";
$subject = "=?utf-8?B?" . base64_encode('СРОЧНАЯ ЗАЯВКА:') . "?=";
$headers = "From: $my_email\r\n";
$headers .= "Reply-To: $my_email\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

// Собираем сообщение
$message = "Имя: $name;<br>Телефон: $phone;<br>Ситуация: $sita.";

// Отправляем письмо
mail($my_email, $subject, $message, $headers);

echo 'Готово';
?>
