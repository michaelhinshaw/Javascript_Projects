function Ride_Function() {
  var Height, Can_ride;
  Height = document.getElementById("Height").value;
  Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride."
}

function rider(height, weight, age) {
  this.height = height; // meters
  this.weight = weight; // kg
  this.age = age;
}

var Madisyn = new rider(1.62,45, 23);
var Michael = new rider(1.85, 76, 39);
var Tara = new rider(1.72, 58, 44);

function myFunction() {
  document.getElementById("New_and_This").innerHTML="Our first rider, Madisyn is " + Madisyn.age + " and is " +
  Madisyn.height + " meters tall" + ", and weighs " + Madisyn.weight + " Kilograms.";
}

function double_Function() {
  document.getElementById("Nested_Function").innerHTML = Double();
  function Double () {
    var first_try = 1;
    function times_Two() {first_try *= 2;}
    times_Two();
    return first_try;
  }
}