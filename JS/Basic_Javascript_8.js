function Sentence() {
  var part_1 = "The President of the United States ";
  var part_2 = "cannot string together a complete sentence. ";
  var part_3 = "It makes it really hard to watch, ";
  var part_4 = "let alone understand why anyone could defend him.";
  var two_sentences = part_1.concat(part_2, part_3, part_4);
  document.getElementById("Complete_sentence").innerHTML = two_sentences;
}

function slice_Method() {
  var Malcolm_X = "...which we intend to bring into existence by any means necessary.";
  var Section = Malcolm_X.slice(42,66);
  document.getElementById("Slice").innerHTML = Section;
}

function capFunction() {
  var str = "by any means necessary";
  var upr = str.toUpperCase();
  document.getElementById("capital").innerHTML=upr;
}

function mySearchFunction() {
  var anotherStr = "Everywhere I look and everywhere I go."
  var look = anotherStr.search("go");
  document.getElementById("search").innerHTML = look;
}

function typeChangeFunction() {
  var num = 37;
  var C = num.toString();
  document.getElementById("unType").innerHTML = C;
}

function precise_excise() {
  var Y = 3.9675646534344;
  document.getElementById("precise").innerHTML = Y.toPrecision(6);
}

function fixedFunction() {
  var z = 5.8765;
  var A = z.toFixed(2);
  document.getElementById("fixed").innerHTML = A
}

function primitive_Function() {
  var prim = "Not enought time in this world";
  var resolve = prim.valueOf();
  document.getElementById("primitive").innerHTML = resolve;
}