const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0)
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function(numOne, numTwo) {
	return Math.pow(numOne, numTwo);
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
