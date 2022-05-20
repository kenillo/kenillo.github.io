// Part A
const personA = "Lucas";
const personB = "Peter";

let personAmass = 78;
let personAheight = 1.69;

let personBmass = 92;
let personBheight = 1.95;

const lucasBodyMassIndex = (personAmass / (personAheight * personAheight)).toFixed(1);

const peterBodyMassIndex = (personBmass / (personBheight * personBheight)).toFixed(1);

const higherBMI = Boolean(lucasBodyMassIndex > peterBodyMassIndex);

if (lucasBodyMassIndex > peterBodyMassIndex) {
  console.log("Part A");
  console.log(
    `The BMI of ${personB} is ${peterBodyMassIndex} The BMI of ${personA} is ${lucasBodyMassIndex} ${personA}' BMI is higher than ${personB}'s BMI that is ${higherBMI}`);
}


// Part B 
let celsiusTemperature = 50;
let fahrenheitTemperature = 122;

const deg = "\xB0";
const fahrenheitFormula = (celsiusTemperature * 1.8 + 32).toFixed(1);
const celsiusFormula = ((fahrenheitTemperature - 32) / 1.8).toFixed(1);

console.log("Part B");
console.log(
  `${celsiusTemperature}${deg}C is ${fahrenheitFormula}${deg}F and ${fahrenheitTemperature}${deg}F is ${celsiusFormula}${deg}C`
);


// Part C 
const higherBodyMassIndex = lucasBodyMassIndex > peterBodyMassIndex
    ? "Lucas BMI is higher than Peter's!"
    : "Peter's BMI is higher than Lucas'!";
console.log("Part C");

console.log(higherBodyMassIndex);

// 2nd part
if (lucasBodyMassIndex > peterBodyMassIndex) {

  console.log(
    `Lucas BMI (${lucasBodyMassIndex}) is higher than Peter's (${peterBodyMassIndex})!`
  );
} else {
  console.log("Part C");
  console.log("Peter's BMI is higher than Lucas'!");
}

// Part D 
console.log("Part D");
const ConvertCelsiusToFahrenheit = (celsiusTemperature) => {
  result = (celsiusTemperature * 1.8 + 32).toFixed(1);
  console.log(`${celsiusTemperature}${deg}C is ${result}${deg}F`);
};

ConvertCelsiusToFahrenheit(100);
ConvertCelsiusToFahrenheit(0);
ConvertCelsiusToFahrenheit(10);

const ConvertFahrenheitToCelsius = (fahrenheitTemperature) => {
  result = ((fahrenheitTemperature - 32) / 1.8).toFixed(1);
  console.log(`${fahrenheitTemperature}${deg}F is ${result}${deg}C`);
};

ConvertFahrenheitToCelsius(32);
ConvertFahrenheitToCelsius(10);
ConvertFahrenheitToCelsius(102);
