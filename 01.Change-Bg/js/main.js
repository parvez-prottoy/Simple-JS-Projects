function getElement(query) {
  return document.querySelector(query);
}
const codeBox = getElement("#code");
const copyBtn = getElement("#copy");
const generateBtn = getElement("#generate");

function randomColorGenerate() {
  const letters = "0123456789ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += letters[Math.floor(Math.random() * 16)];
  }
  return hex;
}

generateBtn.addEventListener("click", () => {
  const hexColor = randomColorGenerate();
  codeBox.innerText = hexColor;
  document.body.style.backgroundColor = hexColor;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(codeBox.innerText);
});
