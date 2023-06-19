// requirement: make sure to `npm install readline-sync` before running the script

const FREEZING_ZERO = 32;

function fahrenheitToCelsius(tempFahrenheit) {
  return ((tempFahrenheit - FREEZING_ZERO) * 5 / 9);
}

let readlineSync = require('readline-sync');
let tempFahrenheit = readlineSync.question("Enter the temperature in Fahrenheit: ");
console.log(`You entered: ${tempFahrenheit} F`);

let convertedTemp = Math.round(fahrenheitToCelsius(tempFahrenheit));
console.log(`${tempFahrenheit} degrees Fahrenheit is ${convertedTemp} degrees Celsius.`)
