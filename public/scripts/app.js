// Client facing scripts here

// const { text } = require("body-parser");


//FILTER BY PRICE FUNCTIONALITY
const minSlider = document.getElementById('min');
const maxSlider = document.getElementById('max');
const outputMin = document.getElementById('min-value');
const outputMax = document.getElementById('max-value');

outputMin.innerHTML = minSlider.value;
outputMax.innerHTML = maxSlider.value;

let minValue = 0;
let maxValue = 100;

//SLIDER MOVES WITH MIN/MAX PRICE SHOWN
minSlider.oninput = function() {
  outputMin.innerHTML = this.value;
  minValue = this.value;

  $("div.product").each(function() {
    const $product = $(this);
    const children = $product.children();
    const $textBox = $(children[1]);

    const price = $textBox.children('.price');
    const dollarSignPrice = $(price);
    const stringPrice = dollarSignPrice.text().slice(1);


    if (Number(stringPrice) <= minValue || Number(stringPrice) >= maxValue) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
};

maxSlider.oninput = function() {
  outputMax.innerHTML = this.value;
  maxValue = this.value;

  $("div.product").each(function() {
    const $product = $(this);
    const children = $product.children();
    const $textBox = $(children[1]);

    const price = $textBox.children('.price');
    const dollarSignPrice = $(price);
    const stringPrice = dollarSignPrice.text().slice(1);

    if (Number(stringPrice) <= minValue || Number(stringPrice) >= maxValue) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
};
