var screen = document.getElementById("screen");
var button = document.querySelectorAll("button");
var buttonText;
var screenText = "";
var previousans;
function bodyload() {
  screen.value = " ";
}
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (e) => {
    buttonText = e.target.value;
    if (buttonText == "AC") {
      screen.value = "";
      // screenText = "";
    } else if (buttonText == "CE") {
      if (screen.value != "") {
        // previousans = previousans.slice(0, -1);
        // screenText = screenText.slice(0, -1);
        screen.value = screen.value.slice(0, -1);
        previousans = screenText;
      }
    } else if (buttonText == "=") {
      screen.value = eval(screen.value);
      // previousans = screen.value;
      // screenText = previousans;
    } else if (buttonText == "") {
      screenText += previousans;
      screen.value += previousans;
    } else if (buttonText == "x2") {
      // screenText = 0;
      screen.value = screen.value * screen.value;
      // screen.value = screenText;
    } else if (buttonText == "√") {
      // screenText = 0;
      screen.value = Math.sqrt(screen.value);
      // screen.value = screenText;
    } else if (buttonText == "ln") {
      // screenText = 0;
      screen.value = Math.log(screen.value);
      // screen.value = screenText;
    } else if (buttonText == "cos") {
      // screenText = 0;
      screen.value = Math.cos(screen.value);
      // screen.value = screenText;
    } else if (buttonText == "sin") {
      // screenText = 0;
      screen.value = Math.sin(screen.value);
      // screen.value = screenText;
    } else if (buttonText == "tan") {
      // screenText = 0;
      screen.value = Math.tan(screen.value);
      // screen.value = screenText;
    } else {
      screen.value += buttonText;
      // screen.value = screenText;
    }
  });
}