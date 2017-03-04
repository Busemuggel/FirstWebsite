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
    if( isset($_GET['news'])) {
        return $news[$_GET['news']]; 
    } elseif( isset($_GET['content'])) {
        return $content[$_GET['content']]; 
   } elseif( isset($_GET['players'])) {    
        $result = array();
        $result[] = new Player("Ole", "1", "1540");
        $result[] = new Player("Ben", "2", "2440");
        $result[] = new Player("Lucas", "3", "725");
        $result[] = new Player("John", "4", "1825");
        $result[] = new Player("askmewhatever", "5", "2556");
        $result[] = new Player("Adolf", "6", "6230");

        return json_encode($result);
    }   

     /*    elseif( isset($_GET['players'])) {
            //HIER MUSST DU DEN DatabaseController aufrufen
        $result = New DatabaseController();    
        $result->getPlayers();
     //   $result[] = new Player($players);
         return json_encode($result);     
        }    */

    //matchService.php?date=true
    elseif( isset($_GET['date'])) {
        return date("l"); 
    }
    return "hallo welt";
}

echo handleUrl($news, $content);

?>