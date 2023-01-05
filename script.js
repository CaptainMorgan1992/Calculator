let buttons = Array.from(document.getElementsByClassName("button"));
const display = document.getElementById("display");
let memoryNumber = 0;

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        display.innerText = eval(display.innerText);
        break;
      case "√":
        display.innerText = Math.sqrt(display.innerText);
        break;
      case "M+":
        memoryNumber = display.innerText;
        display.innerText = "";
        break;
      case "MR":
        display.innerText = memoryNumber;
        break;
      case "MC":
        memoryNumber = 0;
        display.innerText = "";
        break;
      case "M-":
        memoryNumber = memoryNumber - display.innerText;
        display.innerText = "";
        break;
      case "^2":
        let poweredNumber = Math.pow(display.innerText, 2);
        display.innerText = poweredNumber;
        break;

      default:
        if (
          e.target.innerText >= 0 ||
          e.target.innerText <= 10 ||
          e.target.innerText == "+" ||
          e.target.innerText == "-" ||
          e.target.innerText == "*" ||
          e.target.innerText == "." ||
          e.target.innerText == "/"
        ) {
          display.innerText += e.target.innerText;
        } else display.innerText += "";
    }
  });
});
