"use strict";

// let rate = Number

// const rate = Number(document.querySelector(".rate"));
// const hour = Number(document.querySelector(".hour"));
// const min = Number(document.querySelector(".min"));
// const sec = Number(document.querySelector(".sec"));

document.querySelector(".Calculate").addEventListener("click", function () {
  const calcBudget1 = Number(document.querySelector(".rate").value);
  const calcBudget2 = Number(document.querySelector(".hour").value);
  const calcBudget3 = Number(document.querySelector(".min").value);
  const calcBudget4 = Number(document.querySelector(".sec").value);

  // const h2 = document.querySelector(".number");

  // h2.textContent.style = "#555";

  const calcHour = calcBudget2 * 60 * 60;
  const calcMin = calcBudget3 * 60;
  //console.log(calcBudget3 * 60);

  const priceCalc = ((calcBudget4 + calcMin + calcHour) * calcBudget1) / 60;

  console.log(document.querySelector(typeof ".sec"));

  if (!calcBudget1) {
    document.querySelector(".your-priceResult").textContent =
      "Please insert the Price per minute";
  } else {
    document.querySelector(".your-priceResult").textContent =
      "No Valid Data yet";
  }

  if (calcBudget4 || calcBudget3 || calcBudget2) {
    document.querySelector(
      ".your-priceResult"
    ).textContent = `Your Total Budget is >>> $${priceCalc.toFixed(2)}`;
  }

  if (calcBudget4 >= 60) {
    document.querySelector(
      ".your-priceResult"
    ).textContent = `${calcBudget4} sec = ${(calcBudget4 / 60).toFixed(
      2
    )} min, please type in desired amount in the minute field`;
  }

  if (calcBudget3 >= 60) {
    document.querySelector(
      ".your-priceResult"
    ).textContent = `${calcBudget3} min = ${(calcBudget3 / 60).toFixed(
      2
    )} hour(s), please type in desired amount in the hour field`;
  }
});

document.querySelector(".clear-box").addEventListener("click", function () {
  document.querySelector(".rate").value = "";
  document.querySelector(".hour").value = "";
  document.querySelector(".min").value = "";
  document.querySelector(".sec").value = "";

  document.querySelector(".price").textContent = "Your Price: 0";
});

// (function () {
//   const priceStyle = document.querySelector('h2');
//   header.styl
// })
// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";

//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();

console.log(Math.floor(23.5678));
