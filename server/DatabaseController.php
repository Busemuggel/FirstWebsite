<?php 
include 'Player.php';
class DatabaseController {

    private $mysqli;

    function __construct() {
        $this->mysqli = new mysqli("localhost", "root", "", "moneygame");
    }
    
    public function getPlayers() {
        $players = array();
        
        /* return users from database */
        if ($result = $this->mysqli->query("select * from player")) {

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

    public function placeBet($playerName, $amount) {
        /* return users from database */
        if ($result = $this->mysqli->query("SELECT stacksize FROM player WHERE name LIKE '".$playerName."'")) {
            /* fetch associative array */
            while ($row = $result->fetch_assoc()) {                            
                $stacksize = $row["stacksize"];
                $stacksize -= $amount;
                $this->mysqli->query("UPDATE player SET stacksize = ".$stacksize." WHERE name LIKE '".$playerName."'");
                break;
            }

            /* free result set */
            $result->free();
        }
        unset($mysqli);
        return "updated player ".$playerName." to a stacksize of: ".$stacksize;
    }
}