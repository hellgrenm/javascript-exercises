const convertToCelsius = function(fahren) {
  let avrundad = Math.round( ((fahren -32 ) / (9/5) )* 10  ) / 10
  return avrundad;
};

const convertToFahrenheit = function(celcius) {
  let avrundad = Math.round( ((celcius * (9/5) + 32))* 10  ) / 10
  return avrundad;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
