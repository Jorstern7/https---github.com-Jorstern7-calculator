"use strict";

document.querySelector(".calculate").addEventListener("click", function () {
  const calcBudget1 = Number(document.getElementById("rate").value);
  const calcBudget2 = Number(document.querySelector(".hour").value);
  const calcBudget3 = Number(document.querySelector(".min").value);
  const calcBudget4 = Number(document.querySelector(".sec").value);

  const calcHour = calcBudget2 * 60 * 60;
  const calcMin = calcBudget3 * 60;
  //console.log(calcBudget3 * 60);

  const priceCalc = ((calcBudget4 + calcMin + calcHour) * calcBudget1) / 60;

  console.log(document.querySelector(typeof ".sec"));

  if (calcBudget4 || calcBudget3 || calcBudget2 || calcBudget1) {
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

document.querySelector(".clear-btn").addEventListener("click", function () {
  document.getElementById("rate").value = "";
  document.querySelector(".hour").value = "";
  document.querySelector(".min").value = "";
  document.querySelector(".sec").value = "";

  document.querySelector(".your-priceResult").textContent = "Your Price: 0";
});
