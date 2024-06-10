// Function to calculate simple interest
function calculateSimpleInterest() {
    // Prompt the user to enter the principal amount
    let principal = parseFloat(prompt("Enter the principal amount:"));
    if (isNaN(principal) || principal <= 0) {
        alert("Please enter a valid principal amount.");
        return;
    }

    // Prompt the user to enter the rate of interest
    let rate = parseFloat(prompt("Enter the annual rate of interest (as a percentage):"));
    if (isNaN(rate) || rate <= 0) {
        alert("Please enter a valid rate of interest.");
        return;
    }

    // Prompt the user to enter the time period in years
    let time = parseFloat(prompt("Enter the time period in years:"));
    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid time period.");
        return;
    }

    // Calculate the simple interest
    let interest = (principal * rate * time) / 100;

    // Display the result
    alert(`The simple interest is: ${interest.toFixed(2)}`);
}

// Call the function to calculate simple interest
calculateSimpleInterest();
