const passwordDisplay = document.getElementById("passDisplay");
const passwordLength = document.getElementById("range");

const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const generateButton = document.querySelector("button");

const strengthLevel = document.getElementById("strength-level");

const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square4 = document.getElementById("square4");

const characterLengthNumber = document.getElementById("charNum");

//////////////// change length of password characters /////////////////

passwordLength.addEventListener("input", (e) => {
  characterLengthNumber.innerText = passwordLength.value;

  let value = e.target.value;
  let min = e.target.min;
  let max = e.target.max;
  let percentage = ((value - min) / (max - min)) * 100 + "%";
  document.documentElement.style.setProperty("--thumb-position", percentage);

  ////---  level of strength(change word and color of square bars) ----///

  if (e.target.value < 7) {
    strengthLevel.innerText = "too weak!";

    square1.classList.add("red");
    square2.classList.add("white-border");
    square3.classList.add("white-border");
    square4.classList.add("white-border");
    square1.classList.remove(
      "orange",
      "yellow",
      "green",
      "default-white-border"
    );
    square2.classList.remove(
      "orange",
      "yellow",
      "green",
      "default-white-border"
    );
    square3.classList.remove("yellow", "green", "default-white-border");
    square4.classList.remove("green", "default-white-border");
  } else if (e.target.value >= 7 && e.target.value < 9) {
    strengthLevel.innerText = "weak";

    square1.classList.add("orange");
    square2.classList.add("orange");
    square3.classList.add("white-border");
    square4.classList.add("white-border");
    square1.classList.remove("red", "yellow", "green", "default-white-border");
    square2.classList.remove(
      "white-border",
      "yellow",
      "green",
      "default-white-border"
    );
    square3.classList.remove("yellow", "green", "default-white-border");
    square4.classList.remove("green", "default-white-border");
  } else if (e.target.value >= 9 && e.target.value < 14) {
    strengthLevel.innerText = "medium";

    square1.classList.add("yellow");
    square2.classList.add("yellow");
    square3.classList.add("yellow");
    square4.classList.add("white-border");
    square1.classList.remove("red", "orange", "green", "default-white-border");
    square2.classList.remove(
      "white-border",
      "orange",
      "green",
      "default-white-border"
    );
    square3.classList.remove("white-border", "green", "default-white-border");
    square4.classList.remove("green", "default-white-border");
  } else if (e.target.value >= 14) {
    strengthLevel.innerText = "strong";

    square1.classList.add("green");
    square2.classList.add("green");
    square3.classList.add("green");
    square4.classList.add("green");
    square1.classList.remove("red", "orange", "yellow", "default-white-border");
    square2.classList.remove(
      "white-border",
      "orange",
      "yellow",
      "red",
      "default-white-border"
    );
    square3.classList.remove("white-border", "yellow", "default-white-border");
    square4.classList.remove("white-border", "default-white-border");
  } else {
    strengthLevel.innerText = "";
  }
});

////////////////////////////////   password generator function /////////////////

function generatePassword() {
  let charSet = "";

  if (uppercaseCheckbox.checked) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lowercaseCheckbox.checked) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }

  if (numbersCheckbox.checked) {
    charSet += "0123456789";
  }

  if (symbolsCheckbox.checked) {
    charSet += `-=!@#$%^&*<(>)_+.{}/\?|;:'"`;
  }

  let password = "";
  for (i = 0; i < passwordLength.value; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  passwordDisplay.innerText = password;

  /// if nothing checked display text empty ////
  if (
    !uppercaseCheckbox.checked &&
    !lowercaseCheckbox.checked &&
    !numbersCheckbox.checked &&
    !symbolsCheckbox.checked
  ) {
    passwordDisplay.innerText = "";

    square1.classList.add("default-white-border");
    square2.classList.add("default-white-border");
    square3.classList.add("default-white-border");
    square4.classList.add("default-white-border");

    square1.classList.remove("red", "orange", "green", "yellow");
    square2.classList.remove("red", "orange", "green", "yellow");
    square3.classList.remove("red", "orange", "green", "yellow");
    square4.classList.remove("red", "orange", "green", "yellow");
  }
}

////////////////// back to default white border squares without colors //////////////////

/* generateButton.addEventListener("click", () => {}); */

///////////////// copy password to clipboard /////////////////

const copyButton = document.getElementById("copy-button");
const copiedMessage = document.querySelector(".copied");

copyButton.addEventListener("click", () => {
  const text = passwordDisplay.innerText;
  navigator.clipboard.writeText(text);

  copiedMessage.style.display = "block";
  setTimeout(() => {
    copiedMessage.style.display = "none";
  }, 400);
});
