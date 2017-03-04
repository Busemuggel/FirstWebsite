<?php 
//include 'Player.php';
include 'DatabaseController.php';
 //echo "Hallo WELT!!!!";

 //if (isset($_GET['id']))

// $_GET ist ein array, dass aus allen Daten hinter dem ? in der url besteht

$news = array();
$news[] = 'Taliban am Start';
$news[] = 'Trump ist Präsi';

$content = array();
$content[] = 'In einer Runde Moneygame können bis zu 10 Spieler teilnehmen, die jeweils
            eine <div class="tooltip"> Ante <span class="tooltiptext">Ein Zwangsbeitrag, den jeder Spieler zahlen muss, damit
            das Spiel los gehen kann</span></div> bezahlen müssen. Nach diesem Einsatz geht die erste Runde los: Alle Spieler
            setzten einen x-beliebigen Geldbetrag in den Pot. Nachdem dies geschehen ist, werden die 3 Spieler mit dem
            geringsten Einsatz ausgeschieden. Die restlichen 7 kommen in die 2. Runde und betten weiter um den Pot. Der
            Geldbetrag, der bisher gesetzt wurde, bleibt bestehen, jedoch können die Gegenspieler diesen Bet jetzt sehen.
            Nachdem ....';

function handleUrl($news, $content){
    $db = New DatabaseController(); 
    if( isset($_GET['news'])) {
        return $news[$_GET['news']]; 
    } elseif( isset($_GET['content'])) {
        return $content[$_GET['content']]; 
   } elseif( isset($_GET['players'])) {    
        //HIER MUSST DU DEN DatabaseController aufrufen   
        return json_encode($db->getPlayers());
     //   $result[] = new Player($players);
         return json_encode($result);     
        }   

    //matchService.php?date=true
    elseif( isset($_GET['date'])) {
        return date("l"); 
    }
    // http://localhost/Firstwebsite/server/matchService.php?bet=true&player=Adolf&amount=88
    // http://localhost/Firstwebsite/server/matchService.php?bet=true&player=Ole&amount=120
    elseif( isset($_GET['bet'])) {
        $playerName = $_GET['player'];
        $amount = $_GET['amount'];
        return "{'action' : 'bet', 'message' : '".$db->placeBet($playerName, $amount)."'}"; 
    }
    return "hallo welt";
}

echo handleUrl($news, $content);

?>