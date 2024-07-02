<!DOCTYPE html>
<html>
<head>
    <title>Вывод изображений</title>
    <link rel="stylesheet" href="info.css">
</head>
<body>
    <div class="div">
    <?php
     require_once 'bd.php';

     if (isset($_GET['search'])) {
        $search = $_GET['search'];
    } else {
        $search = '';
    }
    
     
     $sql = "SELECT Photos.Photo FROM Photos JOIN Uslugi ON Photos.Uslugi_id = Uslugi.id WHERE Uslugi.Name LIKE :search ORDER BY Photos.id";
     $stmt = $pdo->prepare($sql);
     $stmt->execute(['search' => '%' . $search . '%']);
        $row = $stmt->fetch(PDO::FETCH_OBJ); // Извлекаем первую строку результата и так далее в продолжении БД(сколько там есть строк столько можно выводить)
        echo "<div class='uslugiYes'>";
        if ($row) { 
            // Обрабатываем первую запись
            $Photo = $row->Photo;
            $PhotoSrc = "data:image/jpeg;base64," . base64_encode($Photo); // кодировка из бинарного в фото
            echo "<div class='FormUslug'>";
            echo "<a href='usluga.php'><img class='imageUS' src='$PhotoSrc' alt='Изображение услуги'></a>";
            echo "</div>";

            // Вызываем fetch еще раз, чтобы получить следующую запись (вторую)
            $row = $stmt->fetch(PDO::FETCH_OBJ);
            if ($row) { 
                // Обрабатываем вторую запись
                $Photo = $row->Photo;
                $PhotoSrc = "data:image/jpeg;base64," . base64_encode($Photo);
                echo "<div class='FormUslug'>";
                echo "<a href='usluga.php'><img class='imageUS' src='$PhotoSrc' alt='Изображение услуги'></a>";
                echo "</div>";
            }
            // Вызываем fetch еще раз, чтобы получить следующую запись
            $row = $stmt->fetch(PDO::FETCH_OBJ);
            if ($row) { 
                // Обрабатываем третью запись 
                $Photo = $row->Photo;
                $PhotoSrc = "data:image/jpeg;base64," . base64_encode($Photo);
                echo "<div class='FormUslug'>";
                echo "<a href='usluga.php'><img class='imageUS' src='$PhotoSrc' alt='Изображение услуги'></a>";
                echo "</div>";
            }
            // Вызываем fetch еще раз, чтобы получить следующую запись
            $row = $stmt->fetch(PDO::FETCH_OBJ);
            if ($row) { 
                // Обрабатываем четвертую запись и так далее
                $Photo = $row->Photo;
                $PhotoSrc = "data:image/jpeg;base64," . base64_encode($Photo);
                echo "<div class='FormUslug'>";
                echo "<a href='usluga.php'><img class='imageUS' src='$PhotoSrc' alt='Изображение услуги'></a>";
                echo "</div>";
            }
        echo "</div>";
           echo "<div class='uslugiYes'>";
            $row = $stmt->fetch(PDO::FETCH_OBJ);
            if ($row) { 
                $Photo = $row->Photo;
                $PhotoSrc = "data:image/jpeg;base64," . base64_encode($Photo);
                echo "<div class='FormUslug'>";
                echo "<a href='usluga.php'><img class='imageUS' src='$PhotoSrc' alt='Изображение услуги'></a>";
                echo "</div>";
                
            }
            $row = $stmt->fetch(PDO::FETCH_OBJ);
            if ($row) { 
                $Photo = $row->Photo;
                $PhotoSrc = "data:image/jpeg;base64," . base64_encode($Photo);
                echo "<div class='FormUslug'>";
                echo "<a href='usluga.php'><img class='imageUS' src='$PhotoSrc' alt='Изображение услуги'></a>";
                echo "</div>";
                
            }
            $row = $stmt->fetch(PDO::FETCH_OBJ);
            if ($row) { 
                $Photo = $row->Photo;
                $PhotoSrc = "data:image/jpeg;base64," . base64_encode($Photo);
                echo "<div class='FormUslug'>";
                echo "<a href='usluga.php'><img class='imageUS' src='$PhotoSrc' alt='Изображение услуги'></a>";
                echo "</div>";
                
            }
            $row = $stmt->fetch(PDO::FETCH_OBJ);
            if ($row) { 
                $Photo = $row->Photo;
                $PhotoSrc = "data:image/jpeg;base64," . base64_encode($Photo);
                echo "<div class='FormUslug'>";
                echo "<a href='usluga.php'><img class='imageUS' src='$PhotoSrc' alt='Изображение услуги'></a>";
                echo "</div>";
                
            }
            echo "</div>";
            echo "<div class='uslugiYes'>";
            $row = $stmt->fetch(PDO::FETCH_OBJ);
            if ($row) { 
                $Photo = $row->Photo;
                $PhotoSrc = "data:image/jpeg;base64," . base64_encode($Photo);
                echo "<div class='FormUslug'>";
                echo "<a href='usluga.php'><img class='imageUS' src='$PhotoSrc' alt='Изображение услуги'></a>";
                echo "</div>";
                
            }
            $row = $stmt->fetch(PDO::FETCH_OBJ);
            if ($row) { 
                $Photo = $row->Photo;
                $PhotoSrc = "data:image/jpeg;base64," . base64_encode($Photo);
                echo "<div class='FormUslug'>";
                echo "<a href='usluga.php'><img class='imageUS' src='$PhotoSrc' alt='Изображение услуги'></a>";
                echo "</div>";
                
            }
            $row = $stmt->fetch(PDO::FETCH_OBJ);
            if ($row) { 
                $Photo = $row->Photo;
                $PhotoSrc = "data:image/jpeg;base64," . base64_encode($Photo);
                echo "<div class='FormUslug'>";
                echo "<a href='usluga.php'><img class='imageUS' src='$PhotoSrc' alt='Изображение услуги'></a>";
                echo "</div>";
                
            }
            $row = $stmt->fetch(PDO::FETCH_OBJ);
            if ($row) { 
                $Photo = $row->Photo;
                $PhotoSrc = "data:image/jpeg;base64," . base64_encode($Photo);
                echo "<div class='FormUslug'>";
                echo "<a href='usluga.php'><img class='imageUS' src='$PhotoSrc' alt='Изображение услуги'></a>";
                echo "</div>";
                
            }
            echo "</div>";
        } else { // Проверяем, была ли найдена хотя бы одна запись
            echo "По вашему запросу ничего не найдено";
        }
    ?>
    </div>
</body>
</html>
