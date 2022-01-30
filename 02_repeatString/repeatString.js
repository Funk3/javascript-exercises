const myword = '';
const mynumber = Number();

const repeatString = 
    function repeatString(myword, mynumber) {
    if (mynumber >= 1) {
    for (let i = 0; i < mynumber ; i++) {
     return (myword.repeat(mynumber));
    }
    } else if (mynumber == 0) {
        return ('');
    } else if (mynumber <= -1) {
        return ("ERROR");
    }   
}

// Do not edit below this line
module.exports = repeatString;
