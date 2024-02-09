const uppercaseButton = document.getElementById("uppercase");

const lowercaseButton = document.getElementById("lowercase");

const capitalizeButton = document.getElementById("capitalize");

const boldButton = document.getElementById("bold");

const underlineButton = document.getElementById("underline");

const clearAll = document.getElementById("clearAll");
// Converting to Uppercase
uppercaseButton.addEventListener("click", (e) => {
  const textInputByUser = document.getElementById("textInputByUser");

  const outputContainer = document.getElementById("output");

  outputContainer.classList.remove("capitalize");
  outputContainer.value = textInputByUser.value.toUpperCase();
});
//Converting to Lowercase
lowercaseButton.addEventListener("click", (e) => {
  const textInputByUser = document.getElementById("textInputByUser");

  const outputContainer = document.getElementById("output");
  outputContainer.classList.remove("capitalize");
  outputContainer.value = textInputByUser.value.toLowerCase();
});

//Capitalizeing Sentence

capitalizeButton.addEventListener("click", (e) => {
  const textInputByUser = document.getElementById("textInputByUser");

  const outputContainer = document.getElementById("output");

  outputContainer.value = textInputByUser.value;
  outputContainer.classList.add("capitalize");
});
//Converting texts to Bold
boldButton.addEventListener("click", (e) => {
  const textInputByUser = document.getElementById("textInputByUser");

  const outputContainer = document.getElementById("output");

  outputContainer.value = textInputByUser.value;
  outputContainer.classList.add("bold");
});
//Making Text Underline

underlineButton.addEventListener("click", (e) => {
  const textInputByUser = document.getElementById("textInputByUser");

  const outputContainer = document.getElementById("output");

  outputContainer.value = textInputByUser.value;
  outputContainer.classList.add("underline");
});

//Clearing All Texts And Text-Transformations

clearAll.addEventListener("click", (e) => {
  const textInputByUser = document.getElementById("textInputByUser");

  const outputContainer = document.getElementById("output");

  outputContainer.value = "Output";
  textInputByUser.value = "";

  outputContainer.classList.remove("capitalize");
  outputContainer.classList.remove("bold");
  outputContainer.classList.remove("underline");
});
