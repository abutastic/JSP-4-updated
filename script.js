// fetching the elements in DOM

let heading = document.querySelector("h1");
let inputBox = document.querySelector("input");
let submitBtn = document.querySelector("button");
let resultTxt = document.querySelector("h2");

// original values of heading and result section

const ogHeading = heading.innerHTML;
const ogResult = resultTxt.innerHTML;

// function to convert weight

function convertWgt() {
  let inputValue = inputBox.value;
  let weightInKg = inputValue * 0.45359237;

  if (weightInKg > 80) {
    heading.innerHTML = `Mamamia!!😲 You are over weight🤐👀`;
  }

  resultTxt.innerHTML = weightInKg.toFixed(3) + " kg";
//   result disappears after 5 seconds
  setTimeout(function () {
    heading.innerHTML = ogHeading;
    resultTxt.innerHTML = ogResult;
  }, 5000);
}

// event listener to convert weight
submitBtn.addEventListener("click", convertWgt);
