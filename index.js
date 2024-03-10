// const rec = document.getElementById(`rec`)
const colPicker = document.getElementById("colpicker");
const getColorBtn = document.getElementById("getColorBtn");
const tester = document.getElementById("tester");

const baseURL = "https://www.thecolorapi.com/";
const modeSelector = document.getElementById("modeSelector");
const colorsContainer = document.getElementById("colors-container");
const toastDisplay = document.querySelector(".toast_inner");
let schemeHTML = "";
let colorsArray = [];

function toggleToast() {
  toastDisplay.style.display = "flex";
  setTimeout(() => {
    toastDisplay.style.display = "none";
  }, 1000);
}

getColorBtn.addEventListener("click", () => {
  fetch(`${baseURL}scheme?hex=${colPicker.value.slice(
    1
  )}&mode=${modeSelector.value.toLowerCase()}&count=5
  `)
    .then((res) => res.json())
    .then((data) => {
      if (schemeHTML) {
        schemeHTML = "";
      }
      colorsArray = data.colors;
      console.log(colorsArray);
      colorsArray.forEach((color, index) => {
        schemeHTML += `<div class="rectangle" id="rec${
          index + 1
        }" style="background-color:${color.hex.value}"><p id=recText${
          index + 1
        }>${color.hex.value} </p></div>`;
      });
      colorsContainer.innerHTML = schemeHTML;
      for (let i = 0; i < 5; i++) {
        document.getElementById(`rec${i + 1}`).addEventListener("click", () => {
          navigator.clipboard.writeText(
            document.getElementById(`recText${i + 1}`).innerText
          );
          toggleToast();
        });
      }
    });
});
