// get element function
function getElement(query) {
  return document.querySelector(query);
}
let count = 0;
const countText = getElement("#counter-text");
countText.innerText = count;
const incrementBtn = getElement("#increment-btn");
const decrementBtn = getElement("#decrement-btn");
const resetBtn = getElement("#reset-btn");
const saveBtn = getElement("#save-btn");
const savedCount = getElement("#saved-count");
const saved = [];

function counter(isIncrement) {
  isIncrement ? (count += 1) : (count -= 1);
  countText.innerText = count;
}

incrementBtn.addEventListener("click", () => {
  counter(true);
});
decrementBtn.addEventListener("click", () => {
  counter(false);
});
resetBtn.addEventListener("click", () => {
  count = 0;
  countText.innerText = count;
});
saveBtn.addEventListener("click", () => {
  saved.push(countText.innerText);
  savedCount.innerText = saved.join(", ");
});
