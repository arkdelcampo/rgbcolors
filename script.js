// RGB Colors

// Element variables
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let outputEl = document.getElementById("output");
let displayEl = document.getElementById("display");

let prevWidthEl = document.getElementById("prevWidth");
let prevHeightEl = document.getElementById("prevHeight");

// Event listeners
redInEl.addEventListener("change", rgbPreview);
greenInEl.addEventListener("change", rgbPreview);
blueInEl.addEventListener("change", rgbPreview);

prevWidthEl.addEventListener("change", changeSize);
prevHeightEl.addEventListener("change", changeSize);

function changeSize() {
  let width = +prevWidthEl.value;
  let height = +prevHeightEl.value;

  if (width < 50) {
    width = 50;
    prevWidthEl.value = 50;
  } else if (width > 400) {
    width = 400;
    prevWidthEl.value = 400;
  }
  if (height < 50) {
    height = 50;
    prevHeightEl.value = 50;
  } else if (height > 200) {
    height = 200;
    prevHeightEl.value = 200;
  }

  displayEl.style.width = width + "px";
  displayEl.style.height = height + "px";
}

function rgbPreview() {
  // Input
  let rValue = +redInEl.value;
  let gValue = +greenInEl.value;
  let bValue = +blueInEl.value;

  //   Validate Colors (constrain colors between)
  //   Check rValue
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;
  }
  //   Check gValue
  if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInEl.value = 255;
  }
  //   Check bValue
  if (bValue < 0) {
    bValue = 0;
    blueInEl.value = 0;
  } else if (bValue > 255) {
    bValue = 255;
    blueInEl.value = 255;
  }

  // Process
  let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

  // Output
  outputEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}
