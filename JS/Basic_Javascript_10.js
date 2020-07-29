function call_Loop() {
  var number = "";
  var X = 10;
  while (X > 0) {
    number += "<br>In " + X;
    X--;
  }
  document.getElementById("Loop").innerHTML = number;
}


// The string length property  will return the number of characters in a string.  Spaces also count as characters.
function characters() {
  var str = "The only thing we have to fear, is fear itself.";
  var K = str.length;
  document.getElementById("length").innerHTML = K;
}

// a for loop will loop through specific code until a condition is met
var software = ["Ableton", "TidalCycles", "SuperCollider", "Max/MSP",]
var list="";
var M;
function for_Loop() {
  for (M = 0; M < software.length; M++) {
    list += software[M] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = list;
}

function array_Function() {
  var Planet = [];
  Planet[0] = "Mercury";
  Planet[1] = "Venus";
  Planet[3] = "Earth";
  Planet[4] = "Mars";
  Planet[5] = "Jupiter";
  Planet[6] = "Saturn";
  Planet[7] = "Uranus";
  Planet[8] = "Neptune";
  document.getElementById("Array").innerHTML = "The name of the Planet is " + Planet[3] + "."
}

// const defines a constant reference to a value.  Cannot change primitive values,
// but you can change properties of a const object.
function constant_Function() {
  const vehicle = {type: "car", make:"Porche", model:"carrera", color:"black"};
  vehicle.color = "white";
  vehicle.top_speed=182;
  document.getElementById("Constant").innerHTML= "The top speed of the " + vehicle.model + " is " 
  + vehicle.top_speed + " and we have this one in " + vehicle.color + ".";
  }


  var x = 0;
console.log(x); {
  let x = 1;
  console.log(x);
}
  console.log(x);


  let X = thisFunction(91, 92)
  function thisFunction(a, b) {
    return a * b;
  }

  document.getElementById("largeMult").innerHTML = X;

  let liveCoder = {
    name: "coloringSounds ",
    language: "tidalCycles ",
    origin: "Portland ",
    instrument: "Piano ",
    years: "3",
    bio : function() {
      return this.name + "is a live coder who uses " + this.language + " from " + this.origin 
      + ", who also plays " + this.instrument + " and has been live coding for " + this.years 
      + " years."
    }
  };
  document.getElementById("liveCoder").innerHTML = liveCoder.bio();

  

//The break statement exits a loop if a condition is met.
// Here we try to count to 9, but we get to 5 and stop so last executed block is 4.
var numList = "";
var u;
for (u = 0; u < 10; u++) {
  if (u === 5) { break; }
  numList += "Here is " + u + "<br>";
}
document.getElementById("quickBreak").innerHTML = numList;

// a continune statements skips over an interation if a condition is met and continues on.
// Here we skipt the number 5

var skipFive = "";
var n;
for (n = 0; n < 10; n++) {
  if (n === 5) { continue; }
  skipFive += "and " + n + "<br>";
}
document.getElementById("keepOn").innerHTML = skipFive;


