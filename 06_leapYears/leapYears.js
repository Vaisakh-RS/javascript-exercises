const leapYears = function(year) {

        //divisible by 4
        //not divisible by 100 unless they are divisible by 400

    if(year%4==0)
    {
        if(year%100==0)
        {
            if(year%400==0)
                return "Leap Year";
            else
                return "Not a leap year";
        }
        else
            return "Leap year";
    }
    else
    {
        return "Not a Leap year";
    }

    // return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

};

console.log(leapYears(2200))

// Do not edit below this line
module.exports = leapYears;
