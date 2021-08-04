function display() {
  document.getElementById("displayText").innerHTML = "This is the text i want to display when the button is clicked";
}

function displayAlert() {
  alert("This is the text i want to display");
}

function sighUp() {
  var username = prompt("what is your name?");
  if (username == "") {
    document.getElementById("information") .innerHTML = "You are not sighed in.";
  } else {
 var result = "Thank you for sighing up, " + username + "!";
document.getElementById("information").innerHTML = result;
  }
}