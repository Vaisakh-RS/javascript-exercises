const reverseString = function(str) {
    reversedString='';
    length=str.length;
    stringToArray=str.split('');
    
    for(let i=length-1;i>=0;i--)
    {
        reversedString+=stringToArray[i];
    }
    return reversedString;
};



// Do not edit below this line
module.exports = reverseString;
