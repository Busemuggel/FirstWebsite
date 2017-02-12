//chipstack animation
function animate(){
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
}

function hideButton(buttonId) {
    var x = document.getElementById(buttonId);
        x.style.display = 'none';
}

function showButton(buttonId) {
    var x = document.getElementById(buttonId);
        x.style.display = 'block';
}


$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $.ajax({
      url: 'http://localhost/Firstwebsite/server/matchService.php?news=1',
      success: function(data) {
        $('#news').html(data);
      }
    });
    $.ajax({
      url: 'http://localhost/Firstwebsite/server/matchService.php?content=0',
      success: function(data) {
        $('#content').html(data);
      }
    });
    $.ajax({
      url: 'http://localhost/Firstwebsite/server/matchService.php?date=0',
      success: function(data) {
        $('#date').html(data);
      }
    });
    $.getJSON("http://localhost/Firstwebsite/server/matchService.php?players=0", 
      function(data){
            document.getElementById("firstseat").innerHTML = data[0].playerName + "<br>" + data[0].stacksize;
            document.getElementById("secondseat").innerHTML = data[1].playerName + "<br>" + data[1].stacksize; 
            document.getElementById("thirdseat").innerHTML = data[2].playerName + "<br>" + data[2].stacksize;
            document.getElementById("fourthseat").innerHTML = data[3].playerName + "<br>" + data[3].stacksize;
            document.getElementById("fifthseat").innerHTML = data[4].playerName + "<br>" + data[4].stacksize;
            document.getElementById("sixthseat").innerHTML = data[5].playerName + "<br>" + data[5].stacksize;

            $('#betButton').click(function() {
               var vis = document.getElementsByClassName("chips");
                for(i=0; i<vis.length; i++) {
                vis[i].style.visibility = "visible";
                }

                //.stacksize get changed
                var setpot1 = data[0].stacksize -10;
                document.getElementById("firstseat").innerHTML = data[0].playerName + "<br>" +
                setpot1;
                var setpot2 = data[1].stacksize -8;
                document.getElementById("secondseat").innerHTML = data[1].playerName + "<br>" +
                setpot2;
                var setpot3 = data[2].stacksize -7;
                document.getElementById("thirdseat").innerHTML = data[2].playerName + "<br>" +
                setpot3;
                var setpot4 = data[3].stacksize -12;
                document.getElementById("fourthseat").innerHTML = data[3].playerName + "<br>" +
                setpot4;
                var setpot5 = data[4].stacksize -21;
                document.getElementById("fifthseat").innerHTML = data[4].playerName + "<br>" +
                setpot5;
               var setpot6 = data[5].stacksize -13;
               document.getElementById("sixthseat").innerHTML = data[5].playerName + "<br>" +
               setpot6;
                animate();
              });
          $('#loadButton').click(function() {

                  //set table to visible/invisible
              hideButton("loadButton");
              showButton("foldButton");
              showButton("betButton");

              //sets player-colors darker
              var colors = document.getElementsByClassName("player");
              for(i=0; i<colors.length; i++) {
              colors[i].style.backgroundColor = "#B0B0B0";
              }

              //secondPlayer onMove
              document.getElementById("secondseat").style.borderColor = "blue";

              document.getElementById("olePl").innerHTML = data[0].playerName;
              document.getElementById("olePo").innerHTML = data[0].position;
              document.getElementById("oleSt").innerHTML = data[0].stacksize;
              
              document.getElementById("benPl").innerHTML = data[1].playerName;
              document.getElementById("benPo").innerHTML = data[1].position;
              document.getElementById("benSt").innerHTML = data[1].stacksize;
              
              document.getElementById("lucasPl").innerHTML = data[2].playerName;
              document.getElementById("lucasPo").innerHTML = data[2].position;
              document.getElementById("lucasSt").innerHTML = data[2].stacksize;
              
              document.getElementById("johnPl").innerHTML = data[3].playerName;
              document.getElementById("johnPo").innerHTML = data[3].position;
              document.getElementById("johnSt").innerHTML = data[3].stacksize;
              
              document.getElementById("askmewhateverPl").innerHTML = data[4].playerName;
              document.getElementById("askmewhateverPo").innerHTML = data[4].position;
              document.getElementById("askmewhateverSt").innerHTML = data[4].stacksize;
              
              document.getElementById("AdolfPl").innerHTML = data[5].playerName;
              document.getElementById("AdolfPo").innerHTML = data[5].position;
              document.getElementById("AdolfSt").innerHTML = data[5].stacksize;

              $('#foldButton').click(function() {
                  //sets player-colors to default and values to zero
              var col = document.getElementsByClassName("player");
              for(i=0; i<col.length; i++) {
              col[i].style.backgroundColor = "#606060";
              col[i].innerHTML = "";
              }

              //Pot and table become invisible
              document.getElementById("pot").style.visibility = "hidden";
              console.log(document.getElementById("pot"));
              document.getElementById("tabledesign").style.visibility = "hidden";
              document.getElementById("secondseat").style.borderColor = "black";
              showButton("loadButton");
              hideButton("foldButton");
              hideButton("betButton");
              });          
          });
    });
});


