//variable holding a constant value for temperature i.e. Kelvin
const kelvin = 0;
//variable containing the converted value from kelvin to celsius
let celsius = kelvin - 273;
//variable containing the converted value from celsius to kelvin
//use .floor() method from Math object to round down the value
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

//variable containing the converted value from celsius to Newton
//use .floor() method from Math object to round down the value
let newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${newton} degrees Newton.`)
