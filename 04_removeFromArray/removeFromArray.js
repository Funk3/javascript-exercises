const removeFromArray = function(arrayinParameter,...args) {
   let newArray = [];
   for (let currentNumber= 0; currentNumber < arrayinParameter.length; currentNumber++) {
      const arrayNumber = arrayinParameter[currentNumber];
      if (args.includes(arrayNumber)) {
         continue;
      } else {
         newArray.push(arrayNumber);
      }
   }
   return newArray;
}


// Do not edit below this line
module.exports = removeFromArray;



