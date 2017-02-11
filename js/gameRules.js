function person(player, position, stack ) {
    this.playerName = player;
    this.position = position;
    this.stacksize = stack;
    }

var ole = new person ("Ole", 1, 1540);
var ben = new person ("Ben", 2, 2440);
var lucas = new person ("Lucas", 3, 725);
var john = new person ("John", 4, 1825);
var askmewhatever = new person ("askmewhatever", 5, 3556);

var loading = document.getElementById("loadButton");
loading.addEventListener("click", tableLoad);

function tableLoad() {
    // buttons are created once only
    var myNode = document.getElementById("buttondiv");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    String(ole, ben, lucas, john, askmewhatever);     
  
    document.getElementById("firstseat").innerHTML = ole.playerName + "<br>" + ole.stacksize;
    document.getElementById("secondseat").innerHTML = ben.playerName + "<br>" + ben.stacksize; 
    document.getElementById("thirdseat").innerHTML = lucas.playerName + "<br>" + lucas.stacksize;
    document.getElementById("fourthseat").innerHTML = john.playerName + "<br>" + john.stacksize;
    document.getElementById("fifthseat").innerHTML = askmewhatever.playerName + "<br>" + askmewhatever.stacksize;
    document.getElementById("sixthseat").innerHTML = "empty seat";
    
    //set table to visible
    document.getElementById("tabledesign").style.visibility = "visible";
    //sets player-colors darker
    var colors = document.getElementsByClassName("player");
    for(i=0; i<colors.length; i++) {
    colors[i].style.backgroundColor = "#B0B0B0";
    }

    //secondPlayer onMove
    document.getElementById("secondseat").style.borderColor = "blue";
   
    //Fold Button created
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Fold"); 
    btn.appendChild(t);
    btn.id="previousButton";   
    var element = document.getElementById("buttondiv");
    element.appendChild(btn);  
    btn.addEventListener("click", foldFunction);
    
    //Bet Button created
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Bet");
    btn.appendChild(t);
    btn.id="nextButton";   
    var element = document.getElementById("buttondiv");
    element.appendChild(btn);
    btn.addEventListener("click", betFunction);
    
    //Start Button removed
    var parent = document.getElementById("buttonHolder");
    var child = document.getElementById("loadButton");
    parent.removeChild(child);
    
    //create vvalues in list
    document.getElementById("olePl").innerHTML = ole.playerName;
    document.getElementById("olePo").innerHTML = ole.position;
    document.getElementById("oleSt").innerHTML = ole.stacksize;
    
    document.getElementById("benPl").innerHTML = ben.playerName;
    document.getElementById("benPo").innerHTML = ben.position;
    document.getElementById("benSt").innerHTML = ben.stacksize;
    
    document.getElementById("lucasPl").innerHTML = lucas.playerName;
    document.getElementById("lucasPo").innerHTML = lucas.position;
    document.getElementById("lucasSt").innerHTML = lucas.stacksize;
    
    document.getElementById("johnPl").innerHTML = john.playerName;
    document.getElementById("johnPo").innerHTML = john.position;
    document.getElementById("johnSt").innerHTML = john.stacksize;
    
    document.getElementById("askmewhateverPl").innerHTML = askmewhatever.playerName;
    document.getElementById("askmewhateverPo").innerHTML = askmewhatever.position;
    document.getElementById("askmewhateverSt").innerHTML = askmewhatever.stacksize;
    
  //  document.getElementById("emptyPl").innerHTML = "empty seat";
  //  document.getElementById("emptyPo").innerHTML = "6";
  //  document.getElementById("emptySt").innerHTML = "";
}

function betFunction() {
    //seat properties get changed
    var vis = document.getElementsByClassName("chips");
    for(i=0; i<vis.length; i++) {
    vis[i].style.visibility = "visible";
    }

    //.stacksize get changed
    var setpot1 = ole.stacksize -10;
    document.getElementById("firstseat").innerHTML = ole.playerName + "<br>" +
    setpot1;
    var setpot2 = ben.stacksize -8;
    document.getElementById("secondseat").innerHTML = ben.playerName + "<br>" +
    setpot2;
    var setpot3 = lucas.stacksize -7;
    document.getElementById("thirdseat").innerHTML = lucas.playerName + "<br>" +
    setpot3;
    var setpot4 = john.stacksize -12;
    document.getElementById("fourthseat").innerHTML = john.playerName + "<br>" +
    setpot4;
    var setpot5 = askmewhatever.stacksize -21;
    document.getElementById("fifthseat").innerHTML = askmewhatever.playerName + "<br>" +
    setpot5;
   // var setpot6 = noob.stacksize -0;
   // document.getElementById("sixthseat").innerHTML = ben.playerName + "<br>" +
   // setpot6;
 
    //chipAnimation into the pot
    var pos = 0;
    var id = setInterval(frame, 25);
    function frame() {
        if (pos == 0) {
    document.getElementById('nextButton').onclick = function(e){
        move('.cmove1')
          .translate(180, 92)
          .end();
        move('.cmove2')
          .translate(0, 132)
          .end();
        move('.cmove3')
          .translate(-180, 92)
          .end();
        move('.cmove4')
          .translate(180, -92)
          .end();
        move('.cmove5')
          .translate(0, -132)
          .end();
        move('.cmove6')
          .translate(-180, -92)
          .end();

    setTimeout(function(){document.getElementById("pot").style.visibility = 
    "visible";}, 500);
    setTimeout(function(){document.getElementById("pot").innerHTML= "58$";}, 500);

    var vis = document.getElementsByClassName("chips");
    for(i=0; i<vis.length; i++) {
    vis[i].style.visibility = "hidden";
  }
      };
     }
  }
}


function foldFunction() {
    //create example Button
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Start animation");
    btn.id="loadButton";
    btn.appendChild(t); 

    var element = document.getElementById("buttonHolder");
    element.appendChild(btn);
    btn.addEventListener("click", tableLoad);

    //Bet-and-Fold-button removed
    var parent = document.getElementById("buttondiv");
    var child = document.getElementById("previousButton");
    parent.removeChild(child);

    var parent = document.getElementById("buttondiv");
    var child = document.getElementById("nextButton");
    parent.removeChild(child);

    //sets player-colors to default and values to zero
    var col = document.getElementsByClassName("player");
    for(i=0; i<col.length; i++) {
    col[i].style.backgroundColor = "#606060";
    col[i].innerHTML = "";
    }

    //Pot and table become invisible
    document.getElementById("pot").style.visibility = "hidden";
    document.getElementById("tabledesign").style.visibility = "hidden";
    document.getElementById("secondseat").style.borderColor = "black";
}



$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
