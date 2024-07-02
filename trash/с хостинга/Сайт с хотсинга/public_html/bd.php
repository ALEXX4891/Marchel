<?php
$user = 'zaicevpm_alfa';
$password = 'alfaaA!'; 
$db = 'zaicevpm_alfa';
$host = 'localhost';

$dsn = 'mysql:host=' . $host . ';dbname='. $db;
$pdo = new PDO($dsn, $user, $password);
?>
