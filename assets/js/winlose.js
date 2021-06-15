// Variables
const tMatch = document.getElementById("Match");
const tWr = document.getElementById("Wr");
const hasil = document.getElementById("hasil");
const resultText = document.getElementById("resultText");

// Functions
function res() {
  validation();
}

function validation() {
  const winNum = win(tMatch.value, tWr.value);
  const loseNum = lose(tMatch.value, tWr.value);
  let text = "";
  if (tMatch.value == "" || tWr.value == "") {
    text = `Field harus diisi bro.`;
    display(text);
  } else if (parseFloat(tMatch.value) < 0 || parseFloat(tWr.value) < 0) {
    text = `Field tidak boleh lebih kecil dari 0`;
    display(text);
  } else {
    text = `Total win: <b>${winNum}</b> match <br> Total lose: <b>${loseNum}</b> match <br>`;
    display(text);
  }
}

function display(text) {
  return (resultText.innerHTML = text);
}

function win(tMatch, tWr) {
  return Math.round(tMatch * (tWr / 100));
}

function lose(tMatch, tWr) {
  return Math.round(tMatch - tMatch * (tWr / 100));
}

// Main
window.addEventListener("load", init);

function init() {
  eventListener();
}

function eventListener() {
  hasil.addEventListener("click", res);
}
