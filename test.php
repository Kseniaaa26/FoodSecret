<?php
/* Принимаем данные из формы */
  $name = $_POST["sirname"]; 
  $email = $_POST["email"];
  $text_message = $_POST["message"];

/* Подключаемся к базе данных */
  $db=mysql_connect("localhost", "root",""); 
  mysql_select_db("pp", $db);

/* Записывает данные */ 
$sql = "INSERT INTO message(name, email, message) VALUES ('$name', '$email', '$text_message')";
$result=mysql_query($sql) or die("Ошибка в запросе!".mysql_error());

/* Делаем редирект обратно */
header("Location: ".$_SERVER["HTTP_REFERER"]); 
exit;
?>