<?php
require_once 'bd.php';

$search = isset($_GET['search']) ? $_GET['search'] : '';

if ($search) {
    $sql = "SELECT id, Name FROM Uslugi WHERE Name LIKE :search LIMIT 5";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['search' => '%' . $search . '%']);

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "<div class='suggestion-item' data-id='" . $row['id'] . "'><p class='suggestion-textName'>" . $row['Name'] . "</p></div>";
    }
}
?>