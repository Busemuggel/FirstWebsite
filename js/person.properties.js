function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
 //   this.personData = function() {
 //       return this.firstName + " " + this.lastName + " " + this.age + " with " +            <-------- Frage an OLE
 //              this.eyeColor + " eyes";
}
Person.prototype.nationality = "English";

Person.prototype.personData = function(){
    return this.firstName + " " + this.lastName + " " + this.age + " with " + 
           this.eyeColor + " eyes";
};

var bigBrother = new Person("Ole", "Hoppe", 26, "blue");
console.log(bigBrother);
var myself = new Person("Ben", "Hoppe", 19, "blue");
console.log(myself);

document.getElementById("persprop").innerHTML = "My Brother is " + 
        bigBrother.personData() + " and he speaks " + Person.prototype.nationality;

document.getElementById("persprop1").innerHTML = "I am " + 
        myself.personData() + " and i speak " + Person.prototype.nationality;


$("#hide").click(function(){
    $("#persprop").hide();
});

$("#hide").click(function(){
    $("#persprop1").hide();
});

$("#show").click(function(){
    $("p").show();
});