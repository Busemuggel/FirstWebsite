<?php
$t = date("H");

if ($t < "5") {
    echo "Gute Nacht!";
} elseif ($t < "10") {
    echo "Guten Morgen!";
} elseif ($t < "18") {
    echo "Guten Tag!";
} elseif ($t < "22") {
    echo "Guten Abend!";
} else {
    echo "Gute Nacht!";
}

$myArr = array("John", "Mary", "Peter", "Sally");

$myJSON = json_encode($myArr);

echo "<br> $myJSON";


$x = 0;

while($x <= 5) {
    echo "my variable x is: $x <br>";
    $x++;
}

?>

