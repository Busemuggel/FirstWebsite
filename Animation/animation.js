function rightMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 35) {
      clearInterval(id);
    } else {
      pos++; 
       elem.style.left = pos + 'px'; 
    }
  }
}

function bottomMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 35) {
      clearInterval(id);
    } else {
      pos++; 
       elem.style.top = pos + 'px'; 
    }
  }
}

function onMDown(obj){  
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Nice Quader";
    obj.style.color = "black";
}

function onMUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Animation";
    obj.style.color = "blue";
}


var chatHR = document.getElementById("myBtnRight");
chatHR.addEventListener("click", textRight);

var chatHB = document.getElementById("myBtnBottom");
    chatHB.addEventListener("click", textBottom);

function textRight() {
    document.getElementById("textField").innerHTML += "moved rightwards<br>";
}

function textBottom() {
    document.getElementById("textField").innerHTML += "moved downwards<br>";
}
