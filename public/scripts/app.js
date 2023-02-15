// Client facing scripts here


//FILTER BY PRICE FUNCTIONALITY
const minSlider = document.getElementById('min');
const maxSlider = document.getElementById('max');
const outputMin = document.getElementById('min-value');
const outputMax = document.getElementById('max-value');

outputMin.innerHTML = minSlider.value;
outputMax.innerHTML = maxSlider.value;

//SLIDER MOVES WITH MIN/MAX PRICE SHOWN
minSlider.oninput = function() {
  outputMin.innerHTML = this.value;
};
maxSlider.oninput = function() {
  outputMax.innerHTML = this.value;
};
