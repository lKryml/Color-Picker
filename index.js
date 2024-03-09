// const rec = document.getElementById(`rec`)
const colPicker = document.getElementById("colpicker");
const getColorBtn = document.getElementById("getColorBtn");
const tester = document.getElementById("tester");

const baseURL = "https://www.thecolorapi.com/";

const colorsContainer = document.getElementById("colors-container");

let schemeHTML = "";
let colorsArray = [];
getColorBtn.addEventListener("click", () => {
  fetch(`${baseURL}scheme?hex=${colPicker.value.slice(
    1
  )}&mode=monochrome&count=5
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
        }" style="background-color:${color.hex.value}"><p>${
          color.hex.value
        } </p></div>`;
      });
      colorsContainer.innerHTML = schemeHTML;
    });
});
