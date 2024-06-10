// Function to convert temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert temperature from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Prompt the user to choose the conversion direction
let direction = prompt("Choose the conversion direction: \n1. Celsius to Fahrenheit \n2. Fahrenheit to Celsius");

// Prompt the user to enter the temperature value
let temperature = parseFloat(prompt("Enter the temperature value:"));

// Perform the conversion based on user's choice
switch (direction) {
    case '1':
        alert(`${temperature}°C is equal to ${celsiusToFahrenheit(temperature).toFixed(2)}°F`);
        break;
    case '2':
        alert(`${temperature}°F is equal to ${fahrenheitToCelsius(temperature).toFixed(2)}°C`);
        break;
    default:
        alert("Invalid choice. Please enter either '1' or '2' for the conversion direction.");
}
