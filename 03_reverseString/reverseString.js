const str = '';
const reverseString = function(str) {
   let stringarray = str.split('');
   let reversestring = stringarray.reverse();
   let finstring = reversestring.toString();
   return finstring.replaceAll(',','');

}

// Do not edit below this line
module.exports = reverseString;




/* 
1) convert string to array
2) reverse array
3) take array and put into string
4) output string 
*/