<?php

$recepient = "podzolkinanatalia@gmail.com";
$sitename = "EnotPrint";

$name = trim($_GET["name"]);
$email = trim($_GET["e-mail"]);
$subject = trim($_GET["subject"]);
$message_form = trim($_GET["message"]);


$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nПочта: $email \nТема: $subject \nСообщение: $message_form ";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");




?>