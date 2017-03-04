<?php 
include 'Player.php';
class DatabaseController {

    public static function getPlayers() {
        $players = array();
        $mysqli = new mysqli("localhost", "root", "", "moneygame");
        /* return users from database */
        if ($result = $mysqli->query("select * from player")) {

            /* fetch associative array */
            while ($row = $result->fetch_assoc()) {                              
                $players[] = new Player($row["name"], $row["position"], $row["stacksize"]);
            }

            /* free result set */
            $result->free();
        }
        unset($mysqli);
        return $players;
    }
}