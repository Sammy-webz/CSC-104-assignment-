// Function to calculate compound interest
function calculateCompoundInterest() {
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

    // Prompt the user to enter the number of times interest is compounded per year
    let n = parseInt(prompt("Enter the number of times interest is compounded per year:"));
    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid number of times interest is compounded per year.");
        return;
    }

    // Calculate the compound interest
    let amount = principal * Math.pow((1 + (rate / (n * 100))), (n * time));
    let interest = amount - principal;

    // Display the result
    alert(`The compound interest is: ${interest.toFixed(2)}`);
    alert(`The total amount after ${time} years is: ${amount.toFixed(2)}`);
}

// Call the function to calculate compound interest
calculateCompoundInterest();
