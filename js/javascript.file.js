function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}

//document.getElementById("demo1").innerHTML =
//"The temperature is " + toCelsius(77) + " Celsius";

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}        

function displayDate() {
    document.getElementById("demo2").innerHTML = Date();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + 1;
}
var hallo= "test";
function test() {
    var a = 1+2;
    console.log("my a is: "+a);
    var b = 0;
    console.log("my b is: "+b);
    var c = a+b;
    console.log("my c is: "+c);
}
var a;
test();


function changeHeader(id) {
    id.innerHTML = "No Limit Texas Holdem";
}