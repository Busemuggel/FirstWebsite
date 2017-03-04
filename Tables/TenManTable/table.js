//chipstack animation
function animate(){
   
// an dieser sache liegt es, dass der erste chip nicht angezeigt wird
   
}

function animate() {
  var deferred1 = new $.Deferred();
  var deferred2 = new $.Deferred();
  var deferred3 = new $.Deferred();
  var deferred4 = new $.Deferred();
  var deferred5 = new $.Deferred();
  var deferred6 = new $.Deferred();
  var deferred7 = new $.Deferred();
  var deferred8 = new $.Deferred();
  var deferred9 = new $.Deferred();
  var deferred10 = new $.Deferred();

   move('.cmove1')
      .translate(0, 198)
      .duration('2s')
      .end(function(){
        deferred1.resolve();
      });
    move('.cmove2')
      .translate(-210, 181)
      .duration('2s')
      .end(function(){
        deferred2.resolve();
      });
    move('.cmove3')
      .translate(-320, 82.5 )
      .duration('2s')
      .end(function(){
        deferred3.resolve();
      });
    move('.cmove4')
      .translate(-320, -82.5 )
      .duration('2s')
      .end(function(){
        deferred4.resolve();
      });     
    move('.cmove5')
      .translate(-210, -181)
      .duration('2s')
      .end(function(){
        deferred5.resolve();
      });
    move('.cmove6')
      .translate(0, -200)
      .duration('2s')
      .end(function(){
        deferred6.resolve();
      });
    move('.cmove7')
      .translate(210, -181)
      .duration('2s')
      .end(function(){
        deferred7.resolve();
      });
    move('.cmove8')
      .translate(322.5, -82.5 )
      .duration('2s')
      .end(function(){
        deferred8.resolve();
      });
    move('.cmove9')
      .translate(322.5, 82.5 )
      .duration('2s')
      .end(function(){
        deferred9.resolve();
      });
    move('.cmove10')
      .translate(210, 181)
      .duration('2s')
      .end(function(){
        deferred10.resolve();
      });

      $.when(deferred1, deferred2, deferred3, deferred4, deferred5, deferred6, deferred7, deferred8, deferred9, deferred10).done(function(){ 
        var vis = document.getElementsByClassName("chips");
        for(i=0; i<vis.length; i++) {
          vis[i].style.visibility = "hidden";
        }
        setTimeout(function(){document.getElementById("pot").style.visibility = 
        "visible";}, 2250);
        setTimeout(function(){document.getElementById("pot").innerHTML= "58$";}, 2250); 
      });    
}

function animateb(){
    move('.cmove1')
      .translate(0, 0)
      .end();
    move('.cmove2')
      .translate(0, 0)
      .end();
    move('.cmove3')
      .translate(0, 0 )
      .end();
    move('.cmove4')
      .translate(0, 0 )
      .end();
    move('.cmove5')
      .translate(0, 0)
      .end();
    move('.cmove6')
      .translate(0, 0)
      .end();
    move('.cmove7')
      .translate(0, 0)
      .end();
    move('.cmove8')
      .translate(0, 0)
      .end();
    move('.cmove9')
      .translate(0, 0)
      .end();
    move('.cmove10')
      .translate(0, 0)
      .end();
}

function hideButton(buttonId) {
    var x = document.getElementById(buttonId);
        x.style.display = 'none';
}

function showButton(buttonId) {
    var x = document.getElementById(buttonId);
        x.style.display = 'block';
}

//set pictures hidden/visible
function displayPictures(picture) {
    var obj = document.getElementById(picture);
            if (obj.style.visibility == 'visible') {
                obj.style.visibility = 'hidden';
            }
            else {
                obj.style.visibility = 'visible';
            }
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

    //hier modifizieren
  //  $.getJSON("http://localhost/Firstwebsite/server/matchService.php?players=0",
      $.getJSON("http://localhost/Firstwebsite/server/matchService.php?players=6",
      function(data){

            $('#loadButton').click(function() {
               // var myElements = $.('.myPlayersClass');
               // über jedes element in myElements loopen und diese Liste "myElements" (welche aus HTML elementen besteht) mit dem Players-JSON aus der Datenbank vergleichen und IDs bzw namen setzen 
               // -> siehe für Players-Json http://localhost/Firstwebsite/server/matchService.php?players=afag
                //set player value into the seats
                $('#pb1').html(data[0].playerName + '<br>' + data[0].stacksize);
                $('#pb2').html(data[1].playerName + '<br>' + data[1].stacksize);
                $('#pb3').html(data[2].playerName + '<br>' + data[2].stacksize);
                $('#pb4').html(data[3].playerName + '<br>' + data[3].stacksize);
                $('#pb5').html(data[4].playerName + '<br>' + data[4].stacksize);
                $('#pb6').html(data[5].playerName + '<br>' + data[5].stacksize);
                $('#pb7').html(data[6].playerName + '<br>' + data[6].stacksize);

                //set .player classes darker
               // var colors = document.getElementsByClassName("player");
                //for(i=0; i<colors.length; i++) {
                //colors[i].style.backgroundColor = "#B0B0B0";
              //}
              
                $('.player').each(function() {
                  this.style.backgroundColor = "#B0B0B0";
                })

                //set .picture classes visible
                var picl = document.getElementsByClassName("picture");
                for(i=0; i<picl.length; i++) {
                  picl[i].style.visibility = "visible";
                }

                //set .playerbody classes visible
                var pbl = document.getElementsByClassName("playerbody");
                for(i=0; i<pbl.length; i++) {
                  pbl[i].style.visibility = "visible";
                }

                //set table to visible/invisible
                hideButton("loadButton");
                showButton("foldButton");
                showButton("betButton");

                //secondPlayer onMove
                document.getElementById("seattwo").style.borderColor = "blue";     // Frage

                //irrelevanter code (immoment)
                $('#olePl').html(data[0].playerName);
                $('#olePo').html(data[0].position);
                $('#oleSt').html(data[0].stacksize);

                $('#benPl').html(data[1].playerName);
                $('#benPo').html(data[1].position);
                $('#benSt').html(data[1].stacksize);

                $('#lucasPl').html(data[2].playerName);
                $('#lucasPo').html(data[2].position);
                $('#lucasSt').html(data[2].stacksize);

                $('#johnPl').html(data[3].playerName);
                $('#johnPo').html(data[3].position);
                $('#johnSt').html(data[3].stacksize);

                $('#askmewhateverPl').html(data[4].playerName);
                $('#askmewhateverPo').html(data[4].position);
                $('#askmewhateverSt').html(data[4].stacksize);

                $('#AdolfPl').html(data[5].playerName);
                $('#AdolfPo').html(data[5].position);
                $('#AdolfSt').html(data[5].stacksize);               

            $('#betButton').click(function() {
               var vis = document.getElementsByClassName("chips");
               console.log(vis);
              
                for(i=0; i<vis.length; i++) {
                vis[i].style.visibility = "visible";
              }
            

                //.stacksize get changed
                var setpot1 = data[0].stacksize -10;
                document.getElementById("pb1").innerHTML = data[0].playerName + "<br>" +
                setpot1;
                var setpot2 = data[1].stacksize -8;
                document.getElementById("pb2").innerHTML = data[1].playerName + "<br>" +
                setpot2;
                var setpot3 = data[2].stacksize -7;
                document.getElementById("pb3").innerHTML = data[2].playerName + "<br>" +
                setpot3;
                var setpot4 = data[3].stacksize -12;
                document.getElementById("pb4").innerHTML = data[3].playerName + "<br>" +
                setpot4;
                var setpot5 = data[4].stacksize -21;
                document.getElementById("pb5").innerHTML = data[4].playerName + "<br>" +
                setpot5;
                var setpot6 = data[5].stacksize -13;
                document.getElementById("pb6").innerHTML = data[5].playerName + "<br>" +
                setpot6;
                var setpot7 = data[6].stacksize -13;
                document.getElementById("pb7").innerHTML = data[6].playerName + "<br>" +
                setpot7;
                animate();
              });

              $('#foldButton').unbind().click(function() {
                console.log("fold button clicked")
              //set .player classes default
              var col = document.getElementsByClassName("player");
              
              for(i=0; i<col.length; i++) {
              col[i].style.backgroundColor = "#606060";
              }            
              document.getElementById("seattwo").style.border = "5px outset grey";

              //set .picture classes default
              var picl = document.getElementsByClassName("picture");
              for(i=0; i<picl.length; i++) {
              picl[i].style.visibility = "hidden";
              }
            
              //set .playerbody classes default
              var pbl = document.getElementsByClassName("playerbody");
              for(i=0; i<pbl.length; i++) {
              pbl[i].style.visibility = "hidden";
              }

              //Pot and list become invisible
              document.getElementById("pot").style.visibility = "hidden";
              console.log(document.getElementById("pot"));
              document.getElementById("tabledesign").style.visibility = "hidden";

              showButton("loadButton");
              hideButton("foldButton");
              hideButton("betButton");

              animateb();
              });         
          });
    });
});