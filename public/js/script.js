const display = document.querySelector("input");
const buttons = document.querySelectorAll(".buttons button");
const clearBttn = document.querySelector("#clear-bttn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});

clearBttn.addEventListener("click", () => {
  display.value = "";
});

document.addEventListener("DOMContentLoaded", (event) => {
  display.value = "";
});
