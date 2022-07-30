const ftoc = function(fahrenheitTemp) {
  let celsius = (fahrenheitTemp - 32) * 5 / 9;
  return celsius;
};

const ctof = function(celsiusTemp) {
  let fahrenheit = celsiusTemp * 9/5 + 32;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
