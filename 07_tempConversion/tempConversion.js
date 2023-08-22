const convertToCelsius = function(farenheit) {
  //(f-32)/1.8
  digits=1;
  celcius=(farenheit-32)/1.8;
  return(Math.round((celcius*Math.pow(10,digits)).toFixed(digits-1))/Math.pow(10,digits)).toFixed(digits);
 
}


const convertToFahrenheit = function(celcius) {
  digits=1;
  farenheit=(celcius*1.8)+32;
  return(Math.round((farenheit*Math.pow(10,digits)).toFixed(digits-1))/Math.pow(10,digits)).toFixed(digits);
}

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
