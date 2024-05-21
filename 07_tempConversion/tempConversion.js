const convertToCelsius = function(tempFahr) {
  return tempFahr === 32 ? 0 :
    Number(((tempFahr - 32) * 5/9).toFixed(1))
};
  
const convertToFahrenheit = function(tempCelc) {
  return tempCelc === 0 ? 32 :
    Number(((tempCelc * 9/5) + 32).toFixed(1))
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
