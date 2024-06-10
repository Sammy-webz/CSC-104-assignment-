// Function to calculate CGPA
function calculateCGPA() {
    // Prompt the user to enter the number of courses
    let numCourses = parseInt(prompt("Enter the number of courses:"));
    if (isNaN(numCourses) || numCourses <= 0) {
        alert("Please enter a valid number of courses.");
        return;
    }

    let totalCreditPoints = 0;
    let totalCredits = 0;

    // Loop through each course to get grade and credit hours
    for (let i = 1; i <= numCourses; i++) {
        // Prompt for grade
        let grade = parseFloat(prompt(`Enter the grade for Course ${i}:`));
        if (isNaN(grade) || grade < 0 || grade > 5) {
            alert("Please enter a valid grade between 0 and 5.");
            return;
        }

        // Prompt for credit hours
        let creditHours = parseInt(prompt(`Enter the credit hours for Course ${i}:`));
        if (isNaN(creditHours) || creditHours <= 0) {
            alert("Please enter a valid number of credit hours.");
            return;
        }

        // Calculate credit points for the course
        let creditPoints = grade * creditHours;

        // Update total credit points and total credits
        totalCreditPoints += creditPoints;
        totalCredits += creditHours;
    }

    // Calculate CGPA
    let cgpa = totalCreditPoints / totalCredits;

    // Display the result
    alert(`Your CGPA is: ${cgpa.toFixed(2)}`);
}

// Call the function to calculate CGPA
calculateCGPA();
