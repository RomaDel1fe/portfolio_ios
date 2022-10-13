<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$token = "5500736755:AAGEQqzkirRvnB94ZiCaUC3qfkTbjh76s5A";
$sourse = $_SERVER['HTTP_REFERER'];
$chat_id = "353959478";
$arr = array(
  'Имя : ' => $name,
  'Почта: ' => $email,
  'Сообщение : ' => $message,
  'Url: ' => $sourse
  
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ./thanks');
} else {
  echo "Error";
}
?>