document.write(typeof 5.23 );

function thisFunction() {
  document.getElementById("Test").innerHTML=0/0;
}

function thatFunction() {

document.getElementById("numbertest_1").innerHTML = isNaN("This is weird");
//document.getElementById("result").innerHTML = isNaN("42") + ": 42";
}

function anotherone() {
  document.getElementById("numbertest_2").innerHTML = isNaN("42");
}

document.write(-5E323);

document.write(4E545);

document.write(9.1 > 9.0);

document.write(0 > 1);

console.log(2 + 2);

console.log("99" + 8);

console.log(99 > 101);

document.write(99 == 99);

document.write(99 == 100);

var C = "This is a string";
var D = "This is a string";
document.write(C === D);

var E = "Words and guitars";
var D = 87;
document.write(E === D)

var F = "1";
var G = 1;
document.write(F === G);

var H = "The"
var I = "work"

document.write(H === I);

document.write(5 < 10 && 4 > 3);

document.write(5 > 10 || 3 > 5);

function not_Function() {
  document.getElementById("Not").innerHTML = !(20 > 10);
}

function yes_not_Function() {
  document.getElementById("Notnot").innerHTML = !(10 > 20);
}