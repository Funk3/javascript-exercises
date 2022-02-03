
const sumAll = function(start, end) {

    let sum = 0;

    let numberRange = [];

    function addthis(item) {
        sum += item;
    }
    if (start < end ){
                for (let firstNumber = start; firstNumber <= end; firstNumber++) {
                numberRange.push(firstNumber);
                }
    }   else (start > end ) ;{
                for (let firstNumber = start; firstNumber >= end; firstNumber--) {
                numberRange.push(firstNumber);
    }
                if (typeof(start) != 'number' || typeof(end) != 'number' || start <=0 || end <=0) {
                    return ('ERROR');
                }   else  {
                        numberRange.forEach(addthis);
                        return sum;
                }
    }
}


    





// Do not edit below this line
module.exports = sumAll;


