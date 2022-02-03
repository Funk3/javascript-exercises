const leapYears = function(...arg) {
return arg % 4 === 0 && (arg % 100 !== 0 || arg % 400 === 0);
}

// Do not edit below this line
module.exports = leapYears;
