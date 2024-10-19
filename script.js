const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");
const buttonarray = Array.from(buttons);
let string = "";
buttonarray.forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
        string = ""
      input.value = string;
    } else if (e.target.innerHTML == "=") {
        string = eval(string)
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
