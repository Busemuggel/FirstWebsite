<?php
include 'DatabaseController.php';
$players = DatabaseController::getPlayers();
var_dump($players);
?>