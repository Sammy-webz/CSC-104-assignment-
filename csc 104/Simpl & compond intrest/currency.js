// Function to convert USD to NGN
function convertCurrency() {
    // Prompt the user to enter the amount in USD
    let usd = parseFloat(prompt("Enter the amount in US Dollars (USD):"));
    if (isNaN(usd) || usd <= 0) {
        alert("Please enter a valid amount in USD.");
        return;
    }

    // Define the conversion rate from USD to NGN (this rate can be updated as needed)
    const conversionRate = 1500; // Example rate, 1 USD = 1500 NGN

    // Calculate the amount in NGN
    let ngn = usd * conversionRate;

    // Display the result
    alert(`The amount in Nigerian Naira (NGN) is: ₦${ngn.toFixed(2)}`);
}

// Call the function to convert currency
convertCurrency();
