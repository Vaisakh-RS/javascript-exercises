const repeatString = function(str,number) {
    finalString='';
    if(number<0)
    {
        return "ERROR";
    }
    for(let i=0;i<number;i++)
    {
        finalString+=str;
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
