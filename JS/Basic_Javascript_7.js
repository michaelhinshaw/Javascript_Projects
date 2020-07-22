var Y = 99; // global variable
function divide_by_three() {
  document.write(Y / 3 + "<br>");
}

function times_three() { //local variable
  document.write(99 * 3 + "<br>");
}

function local_mistake() {
  var x =20;
  document.write(x + 7);
}

divide_by_three();
times_three();
local_mistake(Y + x + "<br>");



function whatTimeIsIt() {
  if (new Date().getHours() > 10) {
    document.getElementById("getUp").innerHTML = "Get out of Bed, Now!!!";
  }
}

function whatIsToday() {
  if (new Date().getDay() < 5) {
    document.getElementById("whatDay").innerHTML = "Today is not the weekend, yet";
  }
}

function practiceFunction() {
  Years = document.getElementById("Years").value;
  if (Years >= 10) {
    Practice = "Wow that's dedication!";
  }
  else {
    Practice = "Stick with it, you'll be happy you did!";
  }
  document.getElementById("How_seasoned_are_you").innerHTML = Practice;
}

function Time_function() {
  var Time = new Date().getHours();
  var Reply;
  if(Time < 12 == Time > 0) {
    Reply = "It is the morning time!";
  }
  else if (Time > 12 == Time < 18) {
    Reply = "It is the afternoon.";
  }
  else {
    Reply = "It is evening time.";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}