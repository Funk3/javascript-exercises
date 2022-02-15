const add = (...args) => args[0] + args[1];
	
const subtract = (...args) => args[0] - args[1];

const sum = function sum(array) {
  if (array.length == 0)  {
    return 0;
  } else if (array.length == 1) {
   return array[0];
  } else {
    let total = 0;
    for (let i =0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
};

const multiply = function multiply(array) {
    return array.reduce((number, newNumber) => number * newNumber);
  };


const power = function power(...args) {
  return args.reduce((number, newNumber) => Math.pow(number, newNumber));
};

const factorial = function factorial(arg) {
  if (arg == 0) {
    return 1;
  } else {
     return (arg * factorial(arg -1));
    }
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
