const ftoc = function(...args) {
let fahrenheit = ((args -32) *0.555555556);
return Math.round(fahrenheit* 10)/10;

};

const ctof = function(...args) {
let celsius = ((args*1.8)+ 32);
return Math.round(celsius*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
