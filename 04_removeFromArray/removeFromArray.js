// ...is the rest operator which combines all the arguments after the array to be into another array

const removeFromArray = function(arr,...numbersToBeRemoved) {
    const newArray=[];
    arr.forEach(element => {
        if(!numbersToBeRemoved.includes(element))
        {
            newArray.push(element);
        }
    });

    return newArray;
};

console.log(removeFromArray([1,2,3],2))
// Do not edit below this line
module.exports = removeFromArray;
