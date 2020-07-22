function addition_Function() {
  var addition = 9 + 2;
  document.getElementById("Math").innerHTML = "9 + 2 = " + addition;
}


function subtract_Function() {
  var subtraction = 99 - 4;
  document.getElementById("take").innerHTML = "99 - 4 = " + subtraction;
}


function mult_function() {
  var easy_Math = 45 * 4;
  document.getElementById("times").innerHTML = "45 * 4 = " + easy_Math;
}

function div_function() {
  var easier_Math = 99 / 3;
  document.getElementById("divide").innerHTML = "99 / 3 = " + easier_Math;
}


function aBunchofMath() {
  var this_math = (11-5) * 9 / 6;
  document.getElementById("multiple").innerHTML = "eleven minus 5 multiplied by 9 and then divided by six equals " + this_math;
}

function modulus() {
  var that_math = 11175 % 4;
  document.getElementById("that_math").innerHTML = "after dividing 11175 by 4, you get " + that_math + " left over."
}

function negativeFunction() {
  var neg_Math = 100;
  document.getElementById("negation").innerHTML = -neg_Math;
}

var Y = 9;
Y++;
document.write(Y);

var X = 76;
X--;
document.write(X);

window.alert(Math.random() * 64);

Math.pow(12, 4);
window.alert(Math.pow(12, 4));