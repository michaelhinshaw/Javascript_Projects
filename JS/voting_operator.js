function voting_age() {
  var age, Can_vote;
  age = document.getElementById("age").value;
  Can_vote = (age < 18) ? "You are not old enough":"You are old enough";
  document.getElementById("Vote").innerHTML = Can_vote + " to vote."
}